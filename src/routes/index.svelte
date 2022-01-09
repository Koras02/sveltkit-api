<script>
    // import Nav from '../components/nav.svelte';
    // console.log("Helloword");
    // 배열로 불러올것
    import {pokemon} from '../sotres/pokestore';
    // $으로 불러올것
    console.log($pokemon)
</script>
<svelte:head>
    <!-- 웹페이지의 타이틀을 설정하는 곳  -->
    <title>Svelte Pokesstdex</title>
</svelte:head>
<!-- <Nav/> -->
<h1>Svelte kit pokedex</h1>


{#each $pokemon as pokeman}
<p>{pokeman.name}</p>
{/each}

<!-- 
<style>
      h1 {
          color:red;
      } -->
 <!-- </style> -->

 <!-- js html css 한곳에 설정 -->