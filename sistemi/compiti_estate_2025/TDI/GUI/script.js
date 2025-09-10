function view_camp_TDI() {
    document.getElementById("netid").value = ""
    document.getElementById("mask").value = ""
    document.getElementById("gateway").value = ""
    document.getElementById("interface").value = ""
    document.getElementById("metric").value = ""

    document.getElementById("input-row").style.display = "flex";
}

function view_camp_ip() {
    document.getElementById("ip").value = ""

    document.getElementById("input-ip").style.display = "flex";
}

async function invio() {
    const netid = document.getElementById("netid").value.trim();
    const mask = document.getElementById("mask").value.trim();
    const gateway = document.getElementById("gateway").value.trim();
    const interf = document.getElementById("interface").value.trim();
    const metric = document.getElementById("metric").value.trim();

    if (!netid || !mask || !gateway || !interf || !metric) {
        alert("Compila tutti i campi prima di inviare.");
        return;
    }

    const response = await window.pywebview.api.add_row(netid, mask, gateway, interf, metric);

    if (response === "ok") {
        update_TDI()
    } else {
        alert("Errore nell'inserimento dei dati.");
    }

    document.getElementById("input-row").style.display = "none";
}

async function update_TDI() {
    const TDI = await window.pywebview.api.get_table();
    const container = document.getElementById("TDI");
    container.innerHTML = ""; 

    TDI.forEach((row, rowIndex) => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.id = `row-${rowIndex}`
        row.forEach((cell, cellIndex) => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = cell;
            input.classList.add("cell-input");
            input.id = `cell-${rowIndex}-${cellIndex}`; 
            rowDiv.appendChild(input);
        });

        if(rowIndex !== 0){
            // Pulsante Salva
            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Salva";
            //saveBtn.classList.add("save-btn");
            saveBtn.onclick = () => saveRow(rowIndex);
            rowDiv.appendChild(saveBtn);

            // Pulsante Elimina
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Elimina";
            //deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = () => deleteRow(rowIndex);
            rowDiv.appendChild(deleteBtn);

        }
        container.appendChild(rowDiv);
    });
}

async function deleteRow(index) {
    const response = await window.pywebview.api.remove_row(index);
    if (response === "ok") {
        update_TDI();
    } else {
        alert("Errore durante l'eliminazione.");
    }
}

async function saveRow(index) {
    const netid = document.getElementById(`cell-${index}-0`).value.trim();
    const mask = document.getElementById(`cell-${index}-1`).value.trim();
    const gateway = document.getElementById(`cell-${index}-2`).value.trim();
    const interf = document.getElementById(`cell-${index}-3`).value.trim();
    const metric = document.getElementById(`cell-${index}-4`).value.trim();

    const response = await window.pywebview.api.edit_row(index, netid, mask, gateway, interf, metric);

    if (response !== "ok") {
        alert("Errore durante il salvataggio dei dati.");
    }
    update_TDI();
}
//da provare :)
async function invio_ip() {
    update_TDI()
    const ip = document.getElementById("ip").value.trim();
    if (!ip) {
        alert("Inserisci un IP.");
        return;
    }

    const response = await window.pywebview.api.get_route_by_ip(ip);
    
    if(response.length === 0){
        alert("nessuna route disponibile")
    }
    else{
        response.forEach((index_row, index) => {
            if(index === 0 ){
                document.getElementById(`row-${index_row}`).classList.add("route_found_1");
            } else {
                document.getElementById(`row-${index_row}`).classList.add("route_found_2");
            }
        });

    }

    document.getElementById("input-ip").style.display = "none";
}
