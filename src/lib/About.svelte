<section class="grid">
    <div class="mx-4 col-span-2 md:col-span-1 ml-7">
      <h2 class="font-semibold text-center text-lg">top skills</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut
        tempora
        <a href="resume.pdf" download target="_blank" rel="noopener noreferrer"> donwload resume </a>
      </p>
      <div class="skills bg-slate-300 m-2 p-2 rounded-lg grid">
        <ul>
          <li>html/css</li>
          <li>sass/postcss</li>
          <li>tailwind/bootstrap</li>
        </ul>
        <ul>
          <li>javascript</li>
          <li>react</li>
          <li>nodejs/express</li>
        </ul>
      </div>
    </div>
    <div class="mx-4 col-span-2 md:col-span-1 mr-7">
      <img class="w-2/5 mx-auto mb-4" src="./images/me.JPG" alt="" />
      <h2 class="font-semibold text-center text-xl">find more about me</h2>
      <div class="text-center">
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              facebook
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

<style>
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: space-evenly;
  }
  section{
    padding: .6rem 1rem;
    border:1px solid rgb(0 0 0);
    background-color: rgb(255, 255, 255);
  }
</style>