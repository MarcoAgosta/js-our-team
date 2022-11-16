const membriTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
]
const lista = document.getElementById("listaimpiegati")


for (let i = 0; i <= membriTeam.length-1; i++){
    console.log(membriTeam[i].nome)
    console.log(membriTeam[i].ruolo)
    console.log(membriTeam[i].foto)
    lista.innerHTML += `<li class="list-group-item">Il primo impiegato si chiama ${membriTeam[i].nome}, il suo ruolo è ${membriTeam[i].ruolo} e il file della sua foto profilo è ${membriTeam[i].foto}.</li>`
}