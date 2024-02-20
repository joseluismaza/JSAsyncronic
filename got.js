const characterList = document.getElementById('character-list');
const characterImage = document.getElementById('character-image');

// Obtener la lista de personajes
fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    // Poblar el selector
    data.forEach(character => {
      const option = document.createElement('option');
      option.textContent = character.fullName;
      characterList.appendChild(option);
    });

    // Mostrar la imagen del primer personaje por defecto
    const firstCharacter = data[0];
    characterImage.src = firstCharacter.imageUrl;

    // Mostrar la imagen del personaje seleccionado
    characterList.addEventListener('change', () => {
      const selectedCharacterId = characterList.value;
      const selectedCharacter = data.find(character => character.fullName === selectedCharacterId);
      characterImage.src = selectedCharacter.imageUrl;
    });
  });

