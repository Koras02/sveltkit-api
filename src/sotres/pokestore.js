// 쓰기 기능
import { writable } from 'svelte/store';


// 빈배열
export const pokemon = writable([]);


// 포케몬 정보를 불러올 api저장소 
const fetchPokemon = async() => {
    // 불러올 url 선언
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;

    // res값에 fetch된 url을 담김
    const res = await fetch(url);
    // data형식으로 json을 받아옴
    const data = await res.json();


    // 불러온 포켓몬을 results결과값에 담굼
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            // id를 1씩증가
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
    });
    pokemon.set(loadedPokemon);
};
fetchPokemon(150);

// setTimeout(() => {
//     // 지정된 시간뒤 2개의 포겟몬만 보여줄 수 있음
//     fetchPokemon(2);
// }, 3000)