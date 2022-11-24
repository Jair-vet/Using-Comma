const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input) {
    // Evitar  espacios con Trim()
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagEl.ondblclick = eliminarskills
        tagsEl.appendChild(tagEl)
    })
    actualizarInputHidden();
}

function eliminarskills(e) {
    e.target.remove()
    tags = tags.filter(tags => tags !== e.target.textContent)
    actualizarInputHidden();
}
function actualizarInputHidden() {
   skillsInputHidden.value = tags.toString();
}

const skillsInput = document.querySelector('#skills_input');
    const skillsInputHidden = document.querySelector('[name="skills"]');
    if(skillsInput) {
        const skillsDiv = document.querySelector('#skills')
        let skills = [];
        // Recuperar del input oculto
        if(skillsInputHidden.value !== '') {
            skills = skillsInputHidden.value.split(',');
            mostrarSkills();
        }
 
        // Escuchar los cambios en el input
        skillsInput.addEventListener('keypress', guardarTag)
        function guardarTag(e) {
            if(e.keyCode === 44) {
                if(e.target.value.trim() === '' || e.target.value < 1 ){    // Validar espacios vacios
                    return
                }
                e.preventDefault();  // Prevenir la acción
                skills = [...skills, e.target.value.trim()]  // Llenamos el arreglo
                skillsInput.value = '';  // Limpiar el arreglo
                mostrarSkills();
                //  console.log(skills) 
            }
        }
        function mostrarSkills() {
            skillsDiv.textContent = '';
            // interamos en cada etiqueta 
            skills.forEach( skills => {
                const etiqueta = document.createElement('LI');
                etiqueta.classList.add('formulario__skills')
                etiqueta.textContent = skills;
                etiqueta.ondblclick = eliminarskills
                skillsDiv.appendChild(etiqueta)
            })
            actualizarInputHidden();
        }   
        function eliminarskills(e) {
            e.target.remove()
            skills = skills.filter(skills => skills !== e.target.textContent)
            actualizarInputHidden();
        }
        function actualizarInputHidden() {
           skillsInputHidden.value = skills.toString();
        }
    }