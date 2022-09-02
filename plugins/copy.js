const Text1=`<template>
<div class="background-img pb-60">
    <div class="opacity-100">

        <!-- NAVBAR -->
        <section
            class="flex  mx-auto py-8 px-10 md:px-20 text-gray-300  shadow-2xl border-b-2 border-red-700  justify-between w-full h-full bg-black opacity-90">
            <a href="#" class="md:flex hidden">
                <h2 class="font-bold text-2xl">NewDevz Cinema</h2>
            </a>

            <div class="   ">
                <a href="#" class="flex md:hidden">
                    <h2 class="font-bold text-2xl">MovieHub</h2>
                </a>

                <nav id="menu"
                    class="items-center justify-center hidden space-x-8 md:space-y-0 space-y-8  md:flex md:mt-0 mt-10 ">
                    <a href="#"
                        class=" text-base font-bold uppercase transition duration-150 ease hover:text-red-500 hover:underline hover:underline-offset-4">
                        <span class="block">Home</span>
                    </a>
                    <a href="#"
                        class=" text-base font-bold uppercase transition duration-150 ease hover:text-red-500  hover:underline hover:underline-offset-4 ">
                        <span class="block">Category</span>
                    </a>
                    <a href="#"
                        class=" text-base font-bold uppercase transition duration-150 ease hover:text-red-500  hover:underline hover:underline-offset-4">
                        <span class="block">Trending</span>
                    </a>
                    <a href="#"
                        class=" text-base font-bold uppercase transition duration-150 ease hover:text-red-500  hover:underline hover:underline-offset-4">
                        <span class="block">News</span>
                    </a>
                </nav>
            </div>
            <!-- Mobile Button -->
            <button id="menu-btn" class="flex items-center justify-center h-full md:hidden" @click="hambugerMenu">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16">
                    </path>
                </svg>
            </button>
        </section>

        <!-- HEADER -->
        <section class="relative">
            <div class="relative lg:flex ">
                <div class="container px-10 md:px-20 py-16 lg:pb-20">
                    <div class=" mt-10">
                        <h2 class="text-white text-4xl font-bolder mb-5">THENOS - End Game</h2>
                        <p class="flex space-x-3 mb-5">
                            <span class="text-white ">THRILLER</span>
                            <span class="text-white">ACTION</span>
                            <span class="text-white">DRAMA</span>
                        </p>
                        <p class="text-gray-500 font-xl md:w-3/6 mb-10">Belgian sleuth Hercule Poirot's Egyptian
                            vacation aboard a
                            glamorous river steamer turns into a terrifying search...</p>
    
    
                        <button
                            class=" flex justify-between mb-10  bg-red-700 rounded-2xl px-10 py-2 text-white font-bold transition duration-150 ease hover:bg-white hover:text-red-500"><span
                                class="mr-3">Watch Now </span><span><svg xmlns="http://www.w3.org/2000/svg" width="30"
                                    height="30" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                </svg></span></button>
    
    
    
                    </div>
    
                </div>
    
                <div class="p-20 mx-auto hidden lg:block">
                    <span class="py-2 px-5 shadow-lg rounded font-bold bg-black text-white text-center opacity-100"> Now
                        Showing</span>
                    <img class="shadow-xl mt-2 w-2/3 h-2/3  rounded-xl border-4 border-white transition duration-150 ease hover:opacity-90"
                        src="~/static/images/endgame.jpg" alt="">
                </div>

            </div>
        
             <!-- Trending  -->
        <div class=" trending container mx-auto px-10 md:px-60">
            <div class="mx-auto  px-5 py-2 w-2/4 lg:w-1/4 bg-black shadow-lg rounded ">
                <p
                    class=" font-bold  text-white text-center opacity-100">Trending</p>
            </div>

            <div class=" mx-auto ">
                <div class="lg:flex justify-between">
                    <!-- card 1 -->
                    <div class="p-4 w-full  lg:w-1/2 transition duration-150 ease hover:opacity-90 ">
                        <img class="flex mx-auto shadow-xl md:w-full md:h-full h-1/2 w-1/2 rounded-xl "
                            src="~/static/images/deathonthenile.webp" alt="">

                    </div>

                    <!-- card 2 -->
                    <div class="lg:flex hidden  p-4 w-full  lg:w-1/2 transition duration-150 ease hover:opacity-90 ">
                        <img class="flex mx-auto shadow-xl md:w-full md:h-full h-1/2 w-1/2 rounded-xl "
                            src="~/static/images/always.jpg" alt="">
                    </div>


                    <!-- card 3 -->
                    <div class="lg:flex hidden p-4 lg:w-1/2 transition duration-150 ease hover:opacity-90">
                        <img class="flex mx-auto shadow-xl md:w-full md:h-full h-1/2 w-1/2 rounded-xl"
                            src="~/static/images/endgame.jpg" alt="">
                    </div>


                </div>

            </div>

            <button class=" flex justify-between mt-5 mb-10 mx-auto bg-red-700 rounded-2xl px-10 py-2 text-white font-semi-bold transition duration-150 ease hover:bg-white hover:text-red-500">View More</button>
        </div>
        </section>
        

       
        
    </div>

</div>
</template>

<script>
export default {
mounted: function () {
    this.hambugerMenu();
},

methods: {
    hambugerMenu() {
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden')
        })
    }
}

}
</script>

<style>
.background-img {
background: linear-gradient(50deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("./static/images/deathonthenile2.jpg");
background-position: left top;
background-size: cover;



}
.trending{
    position:absolute;
    top: 30rem;
}

@media (max-width:768px) {
.background-img {
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),;
    background-position: left top;
    background-size: cover;



}



}
</style>`


const mainFunction = (variant) => {

    var copyText = ``;
  
  
    switch (variant) {
      case 1:
  
        copyText = Text1;
  
        /* Copy the text  */
        navigator.clipboard.writeText(copyText);
        alert("copied");
  
        break;
  
      
        copyText = 'hi';
        /* Copy the text  */
        // navigator.clipboard.writeText(copyText);
        alert("copied");
  
  
        break

      
  
      default:
  
        copyText = Text1;
        /* Copy the text  */
        navigator.clipboard.writeText(copyText);
        alert("copied");
  
  
  
  
    }
  
  }
  
  
  
  
  export default (context, inject) => {
  
    inject('copy', mainFunction);
  
  }
  