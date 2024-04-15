import FroalaEditor from 'react-froala-wysiwyg'
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins/image.min'
export default function EditorTexto(){
    return(
        <FroalaEditor
            config={{
                placeholder: 'Escriba aqui tu diagnostico o avance de la consulta',
                // toolbarButtons:{
                //     moreText:{
                //         buttons:['bold','italic','underline','strikeThrough'],
                //     },
                //     moreParagraph:{
                //         buttons: ['alongLeft', 'alongRight']
                //     },
                //     moreRich:{
                //         buttons:['insertHR']
                //     }
                // }
            }}
            tag="textarea" // Utiliza un textarea como base
        />
    )
}