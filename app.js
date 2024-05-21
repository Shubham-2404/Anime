let main = document.querySelector(".container")
let input = document.querySelector("input")
let btn = document.querySelector("button")
let main1 = document.querySelector(".main1")

const fetchData = async () => {
    try {
        const data = await window.fetch("https://dattebayo-api.onrender.com/characters");
        const finalData = await data.json();

        let char = finalData.characters

        console.log(char);


        char.map((v, i) => {
            let {
                name,
                images
            } = v;
            main.innerHTML += `<div class="char">
            <img src="${images[0]}" alt="">
            <div>${name}</div>
        </div>`
        })

        let char1;

        window.setTimeout(() => {
            var getdata = function getdata() {
                char1 = document.querySelectorAll(".char");
                console.log(char1);
                let img1 = document.querySelectorAll(".char")[0];
                let img2 = document.querySelectorAll(".char")[1];
                let img3 = document.querySelectorAll(".char")[2];
                let img4 = document.querySelectorAll(".char")[3];
                let img5 = document.querySelectorAll(".char")[4];
                let img6 = document.querySelectorAll(".char")[5];
                let img7 = document.querySelectorAll(".char")[6];
                let img8 = document.querySelectorAll(".char")[7];
                let img9 = document.querySelectorAll(".char")[8];
                let img10 = document.querySelectorAll(".char")[9];
                let img11 = document.querySelectorAll(".char")[10];
                let img12 = document.querySelectorAll(".char")[11];
                let img13 = document.querySelectorAll(".char")[12];
                let img14 = document.querySelectorAll(".char")[13];
                let img15 = document.querySelectorAll(".char")[14];
                let img16 = document.querySelectorAll(".char")[15];
                let img17 = document.querySelectorAll(".char")[16];
                let img18 = document.querySelectorAll(".char")[17];
                let img19 = document.querySelectorAll(".char")[18];
                let img20 = document.querySelectorAll(".char")[19];

                let getclick;

                img1.addEventListener("click", () => {
                    getclick = 0;
                    console.log(getclick);
                    display(getclick)

                })

                img2.addEventListener("click", () => {
                    getclick = 1
                    console.log(getclick);
                    display(getclick)
                })

                img3.addEventListener("click", () => {
                    getclick = 2
                    console.log(getclick);
                    display(getclick)

                })

                img4.addEventListener("click", () => {
                    getclick = 3
                    console.log(getclick);
                    display(getclick)

                })

                img5.addEventListener("click", () => {
                    getclick = 4
                    console.log(getclick);
                    display(getclick)

                })

                img6.addEventListener("click", () => {
                    getclick = 5
                    console.log(getclick);
                    display(getclick)

                })

                img7.addEventListener("click", () => {
                    getclick = 6
                    console.log(getclick);
                    display(getclick)

                })

                img8.addEventListener("click", () => {
                    getclick = 7
                    console.log(getclick);
                    display(getclick)

                })

                img9.addEventListener("click", () => {
                    getclick = 8
                    console.log(getclick);
                    display(getclick)

                })

                img10.addEventListener("click", () => {
                    getclick = 9
                    console.log(getclick);
                    display(getclick)

                })

                img11.addEventListener("click", () => {
                    getclick = 10
                    console.log(getclick);
                    display(getclick)

                })

                img12.addEventListener("click", () => {
                    getclick = 11
                    console.log(getclick);
                    display(getclick)

                })

                img13.addEventListener("click", () => {
                    getclick = 12
                    console.log(getclick);
                    display(getclick)

                })

                img14.addEventListener("click", () => {
                    getclick = 13
                    console.log(getclick);
                    display(getclick)

                })

                img15.addEventListener("click", () => {
                    getclick = 14
                    console.log(getclick);
                    display(getclick)

                })

                img16.addEventListener("click", () => {
                    getclick = 15
                    console.log(getclick);
                    display(getclick)

                })

                img17.addEventListener("click", () => {
                    getclick = 16
                    console.log(getclick);
                    display(getclick)

                })

                img18.addEventListener("click", () => {
                    getclick = 17
                    console.log(getclick);
                    display(getclick)

                })

                img19.addEventListener("click", () => {
                    getclick = 18
                    console.log(getclick);
                    display(getclick)

                })

                img20.addEventListener("click", () => {
                    getclick = 19
                    console.log(getclick);
                    display(getclick)

                })

                img21.addEventListener("click", () => {
                    getclick = 20
                    console.log(getclick);
                    display(getclick)

                })



                function display(getclick) {

                    console.log(mydata);
                    main1.innerHTML = ``
                    main1.innerHTML = `<div class="member">
                                        <div class="head">${char[getclick].name}</div>
                                         <aside class="im1">
                                             <img src="${char[getclick].images[0]}" alt="">
                                            <div>
                                                <div>
                                                    <ul>
                                                        <li>Name : ${char[getclick].name}</li>
                                                        <li>Movie : ${char[getclick].debut.movie}</li>
                                                        <li>Birthdate : ${char[getclick].personal.birthdate}</li>
                                                        <li>BloodType : ${char[getclick].personal.bloodType}</li>
                                                        <li>Clan : ${char[getclick].personal.clan}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </aside>
                                        <button class="btn2">Close</button>
                                    </div>
                                    `

                    let reset = document.querySelector("button");
                    console.log(reset);
                    reset.addEventListener("click", () => {
                        location.reload()
                    })

                }
            }
            getdata();
        }, 2000)

    } catch (error) {
        console.log(error)
    }
}
let mydata = fetchData();