export const noAbsolutePathImgSrc = {
  meta: {
    type: 'suggestion', // 'problem', 'suggestion', or 'layout'
    docs: {
      description: 'enforce `assetUrl` function for img tags with absolute path src',
      category: 'Best Practices',
      recommended: false,
      url: '', // URL to documentation page for this rule
    },
    fixable: 'code', // Or "whitespace" if the fix involves only whitespace changes
    schema: [], // No options
  },

  create(context) {
    let alreadyImported = false;
    return {
      ImportDeclaration(node) {
        if (
          node.source.value === '@/lib/asset-url' &&
          node.specifiers.some((specifier) => specifier.imported.name === 'assetUrl')
        ) {
          alreadyImported = true;
        }
      },
      JSXOpeningElement(node) {
        if (node.name.name !== 'img') return;
        const srcAttribute = node.attributes.find(
          (attribute) => attribute.name && attribute.name.name === 'src',
        );
        if (!srcAttribute || !srcAttribute.value) return;

        // Check if the src attribute's value is a literal starting with '/'
        if (srcAttribute.value.type === 'Literal' && srcAttribute.value.value.startsWith('/')) {
          context.report({
            node,
            message: 'Use assetUrl() for absolute paths in img src',
            fix(fixer) {
              const fixes = [
                fixer.replaceText(srcAttribute.value, `{assetUrl("${srcAttribute.value.value}")}`),
              ];
              if (!alreadyImported) {
                // Add import statement at the top of the file
                // const sourceCode = context.getSourceCode();
                fixes.push(
                  fixer.insertTextAfterRange(
                    [0, 0],
                    `import { assetUrl } from '@/lib/asset-url';\n`,
                  ),
                );
              }
              return fixes;
            },
          });
        }
      },
    };
  },
};
