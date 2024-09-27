module.exports = {
  meta: {
    type: 'problem', // You can set this as 'problem', 'suggestion', or 'layout'
    docs: {
      description: 'Enforce file and folder naming convention',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      invalidName: "Invalid folder or file name '{{ name }}'. Use lowercase with hyphens.",
    },
  },
  create(context) {
    const allowedPattern = /^[a-z]+(-[a-z]+)*$/;

    return {
      Program(node) {
        const fileName = context.getFilename();
        const baseName = fileName.split('/').pop();

        if (!allowedPattern.test(baseName)) {
          context.report({
            node,
            messageId: 'invalidName',
            data: { name: baseName },
          });
        }
      },
    };
  },
};
