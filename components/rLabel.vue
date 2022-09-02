<template>
    <div>
      <!-- Section 1 -->
      <section
        class="
          relative
          block
          py-20
          overflow-hidden
          leading-6
          text-left text-white
          bg-blue-400
        "
      >
        <div
          class="
            w-full
            max-w-2xl
            px-8
            mx-auto
            leading-6
            text-left
            sm:px-12
            md:px-8
            xl:px-12
          "
        >
        
            <h2
              class="
              text-center
                box-border
                mx-0 
                mb-0
                font-sans
                text-2xl
                font-bold
                leading-tight
                sm:text-2xl
                md:text-2xl
              "
            >
             Header {{lText}}
            </h2>
          </div>
  
      </section>
    </div>
  </template>
  
  <script>
  export default {
      props: ['lText']
  };
  </script>
  
  <style>
  </style>