$(document).ready(() => {
    //alert(1);
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getPokemon(searchText);
        e.preventDefault();
    });
});

function getPokemon(searchText) {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+searchText)
    .then((response) => {
        console.log(response);
        let pokemons = response.data;
        let output = '';
        output = (pokemons, () => {
            output += `                
                    <div class="well text-center">
                    <img src="${pokemons.sprites.front_default}">
                        <h5>${pokemons.name}</h5>
                        <p>${pokemons.id} </p>
                    </div>
                
            `;
            //console.log("Hi");
            return output;
        });

        $('#pokemons').html(output);
    })
    .catch((err) => {
        console.log(err);
    })
}