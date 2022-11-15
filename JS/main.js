const membriTeam = [
    primo = {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    secondo = {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    terzo = {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    quarto = {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    quinto = {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    sesto = {
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
    lista.innerHTML += `<li>Il primo impiegato si chiama ${membriTeam[i].nome}, il suo ruolo è ${membriTeam[i].ruolo} e il file della sua foto profilo è ${membriTeam[i].foto}.</li>`
}