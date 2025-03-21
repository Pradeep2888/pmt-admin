import { useFormikContext } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function TextEditor({ name }) {
    const { setFieldValue, values } = useFormikContext();

    const handleEditorChange = (event, editor) => {
        setFieldValue(name, editor.getData());
    };

    return (
        <CKEditor
            editor={ClassicEditor}
            data={values[name] || ''}  // Bind CKEditor data to Formik's state
            config={editorConfiguration}
            onChange={handleEditorChange}
            
        />
    );
}

export default TextEditor;

const editorConfiguration = {
    toolbar: [
        'heading', 'emoji', '|',
        'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
        'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|', 'mediaEmbed', '|',
        'undo', 'redo',
    ],
    height: '500rem',
};
