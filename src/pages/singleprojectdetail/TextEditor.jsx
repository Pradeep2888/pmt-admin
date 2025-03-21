
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UpdateSingleProjectApi } from '../../service/operations/projectApi';

function TextEditor({description,id}) {
    return (
    <CKEditor
            editor={ClassicEditor}
            config={ editorConfiguration }
            data={description?description:""}
            
            onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event) => {
                console.log(event);
            }}
            onBlur={(event, editor) => {
                
                UpdateSingleProjectApi({description:editor.getData()},id)
                
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}
        />
    )
}

export default TextEditor


const editorConfiguration = {
    toolbar: [
        'heading','emoji', '|',
        'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
        'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
        'uploadImage', 'mediaEmbed', '|',
        'undo', 'redo',
    ],
    // image: {
    //     toolbar: [
    //         'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
    //     ]
    // },
    // simpleUpload: {
    //     uploadUrl: 'YOUR_UPLOAD_URL',  // Replace with your upload URL
    //     headers: {
    //         'X-CSRF-TOKEN': 'YOUR_CSRF_TOKEN', // Optional
    //         Authorization: 'Bearer YOUR_AUTH_TOKEN' // Optional
    //     }
    // }
};