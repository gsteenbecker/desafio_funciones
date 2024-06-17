let colorGlobal = 'black'

        function updateColor(event) {
            const keyDiv = document.getElementById('key')
            if (event.key === 'a') {
                colorGlobal = 'pink'
            } else if (event.key === 's') {
                colorGlobal = 'orange'
            } else if (event.key === 'd') {
                colorGlobal = 'skyblue'
            }
            keyDiv.style.backgroundColor = colorGlobal
        }

        function updateUniqueDivColor(event) {
            const uniqueDiv = document.getElementById('key2')
            uniqueDiv.style.display = 'block'

            if (event.key === 'q') {
                uniqueDiv.style.backgroundColor = 'purple'
            } else if (event.key === 'w') {
                uniqueDiv.style.backgroundColor = 'gray'
            } else if (event.key === 'e') {
                uniqueDiv.style.backgroundColor = 'brown'
            }
        }

        function handleKeyPress(event) {
            if (['a', 's', 'd'].includes(event.key)) {
                updateColor(event)
            } else if (['q', 'w', 'e'].includes(event.key)) {
                updateUniqueDivColor(event)
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        

        