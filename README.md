<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
        Execute function
    </p>
    <button id="openBtn">Open</button>
    <button id="closeBtn">Close</button>

    <p id="demo" class="remove">
        Hello world
    </p>
    <style>
        .remove {
            display: none;
        }
        .add {
            display: inline;
        }
    </style>

    <script>
        const openButton = document.getElementById('openBtn')
        const closeButton = document.getElementById('closeBtn')
        const word = document.getElementById('demo')

        openButton.addEventListener('click', function() {
            word.classList.add('add')
            word.classList.remove('remove')
        });
        closeButton.addEventListener('click', function() {
            word.classList.add('remove')
            word.classList.remove('add')
        })

        
    </script>
</body>
</html>
