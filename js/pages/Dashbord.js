class Dashbord {
  static dashbordUi(params) {
    return `
     <div>
     <div class=" p-1 w-full  border mt-3  rounded-xl ">
    <input type="text" class="input__text p-1 rounded-xl outline-none  border-none " />
  </div>
  <span ><h1 class="text"> </h1></span>
     </div>   `;
  }
  static inputEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const inputText = document.querySelector(".input__text");
    const text = document.querySelector(".text");
    inputText.addEventListener("keydown", (e) => {
      if (pattern.test(e.target.value)) {
        text.innerText = "صحیح میباشد";
        text.classList.remove("text-red-400");

        text.classList.add("text-green-500");
      } else {
        text.innerText = "اشتباه میباشد";
        text.classList.add("text-red-400");
        text.classList.remove("text-green-500");
      }
    });
  }
}

export default Dashbord;
