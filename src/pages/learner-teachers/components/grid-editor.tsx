import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  CKFinder,
  CKFinderUploadAdapter,
  ClassicEditor,
  Essentials,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Title,
  TodoList,
  Underline,
  WordCount,
} from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';

import { cn } from '@/lib/utils';

const GTextEditor = ({
  value,
  onChange,
  showToolbar = true,
}: {
  value: string;
  onChange?: (content: string) => void;
  showToolbar?: boolean;
}): React.ReactNode => (
  <div className={cn(!showToolbar && 'ck-custome-editor')}>
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(_, editor) => {
        const data = editor.getData();

        onChange?.(data);
      }}
      config={{
        licenseKey: import.meta.env.VITE_CKEDITOR_LICENSE_KEY,
        removePlugins: ['Title'],
        plugins: [
          Essentials,
          Paragraph,
          Bold,
          Italic,
          Alignment,
          Autoformat,
          BlockQuote,
          CKFinderUploadAdapter,
          CKFinder,
          Image,
          ImageCaption,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Link,
          List,
          MediaEmbed,
          PasteFromOffice,
          RemoveFormat,
          SourceEditing,
          SpecialCharacters,
          SpecialCharactersEssentials,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCellProperties,
          TableProperties,
          TableToolbar,
          TextTransformation,
          Title,
          TodoList,
          Underline,
          WordCount,
          FormatPainter,
        ],
        toolbar: {
          items: [
            'insertTable',
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
          ],
          shouldNotGroupWhenFull: true,
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
          ],
        },
      }}
    />
  </div>
);

export default GTextEditor;
