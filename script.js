document.addEventListener('DOMContentLoaded', function () {
    const planLekcji = document.getElementById('planLekcji');
    const zegar = document.getElementById('zegar');

    const dniTygodnia = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];

    for (let i = 0; i < 5; i++) {
        const dzien = document.createElement('div');
        dzien.className = 'dzien';
        dzien.innerHTML = `<h2>${dniTygodnia[i]}</h2>`;
        

        const lekcjeContainer = document.createElement('div');
        lekcjeContainer.className = 'lekcje-container';
        dzien.appendChild(lekcjeContainer);

        for (let j = 0; j < 5; j++) {
            const lekcja = document.createElement('div');
            lekcja.className = 'lekcja';
            lekcja.innerHTML = `<span>Lekcja ${j + 1}</span><br><span>Godzina rozpoczęcia: ${10 + j}:00</span> <button class="button" onclick="edytujLekcje(${i}, ${j})">Edytuj</button>`;
            lekcjeContainer.appendChild(lekcja);
        }

        planLekcji.appendChild(dzien);
    }

    function aktualizujZegar() {
        const now = new Date();
        const godzina = now.getHours();
        const minuta = now.getMinutes();
        const sekunda = now.getSeconds();
        const czas = `${godzina < 10 ? '0' : ''}${godzina}:${minuta < 10 ? '0' : ''}${minuta}:${sekunda < 10 ? '0' : ''}${sekunda}`;
        zegar.textContent = `Aktualny czas: ${czas}`;
    }

    setInterval(aktualizujZegar, 1000);
});

function edytujLekcje(dzien, lekcja) {
    const nowaNazwa = prompt('Podaj nową nazwę lekcji:');
    if (nowaNazwa !== null) {
        const lekcjeContainer = document.querySelector(`#planLekcji .dzien:nth-child(${dzien + 1}) .lekcje-container`);
        const lekcjaElement = document.querySelector(`#planLekcji .dzien:nth-child(${dzien + 1}) .lekcje-container .lekcja:nth-child(${lekcja + 1})`);

        const nowaLekcja = document.createElement('div');
        nowaLekcja.className = 'lekcja';
        nowaLekcja.innerHTML = `<span>${nowaNazwa}</span><br><span>Godzina rozpoczęcia: ${10 + lekcja}:00</span> <button class="button" onclick="edytujLekcje(${dzien}, ${lekcja + 1})">Edytuj</button>`;
        lekcjeContainer.insertBefore(nowaLekcja, lekcjaElement.nextSibling);
    }
}
