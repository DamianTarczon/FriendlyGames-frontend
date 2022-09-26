import React from "react";

export default function Filter(props) {
    const formData = props.value.formData
    const setFormData = props.value.setFormData

    function handleChange(event){
        const {name, checked, id, value} = event.target
        let levelIds = formData.levelIds
        let surfaceIds = formData.surfaceIds
        let surroundingIds = formData.surroundingIds
        if (name === "levelIds"){
            if (checked){
                levelIds.add(id)
            } else {
                levelIds.delete(id)
            }
        }
        if (name === "surfaceIds"){
            if (checked){
                surfaceIds.add(id)
            } else {
                surfaceIds.delete(id)
            }
        }
        if (name === "surroundingIds"){
            if (checked){
                surroundingIds.add(id)
            } else {
                surroundingIds.delete(id)
            }
        }

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: name === "payable" ? value : 
                (name === "levelIds") ? levelIds : 
                (name === "surfaceIds") ? surfaceIds : surroundingIds
            }
        })
    }


return (
    <form className="filter--div" onSubmit={props.onSubmit}>
        <div className="filter--header">
            <h4>Filtruj według następujących kryteriów:</h4>
        </div>
        <div className="filter--gameLvl">
            <h4>Poziom</h4>
            <input 
                type="checkbox" 
                id="1" 
                checked={formData.levelIds.has("1")}
                onChange={handleChange}
                name="levelIds"
            />
            <label htmlFor="1">Rekreacyjny</label>
            <br />
            <input 
                type="checkbox" 
                id="2" 
                checked={formData.levelIds.has("2")}
                onChange={handleChange}
                name="levelIds"
            />
            <label htmlFor="2">Średniozaawansowany</label>
            <br />
            <input 
                type="checkbox" 
                id="3" 
                checked={formData.levelIds.has("3")}
                onChange={handleChange}
                name="levelIds"
            />
            <label htmlFor="3">Zaawansowany</label>
            <br />
            <br />
        </div>
        <div className="filter--surface">
            <h4>Nawierzchnia</h4>
            <input 
                type="checkbox" 
                id="1" 
                checked={formData.surfaceIds.has("1")}
                onChange={handleChange}
                name="surfaceIds"
            />
            <label htmlFor="1">Trawa</label>
            <br />
            <input 
                type="checkbox" 
                id="2" 
                checked={formData.surfaceIds.has("2")}
                onChange={handleChange}
                name="surfaceIds"
            />
            <label htmlFor="2">Kort</label>
            <br />
            <input 
                type="checkbox" 
                id="3" 
                checked={formData.surfaceIds.has("3")}
                onChange={handleChange}
                name="surfaceIds"
            />
            <label htmlFor="3">Piasek</label>
            <br />
            <input 
                type="checkbox" 
                id="4" 
                checked={formData.surfaceIds.has("4")}
                onChange={handleChange}
                name="surfaceIds"
            />
            <label htmlFor="4">Hala</label>
            <br />
            <input 
                type="checkbox" 
                id="5" 
                checked={formData.surfaceIds.has("5")}
                onChange={handleChange}
                name="surfaceIds"
            />
            <label htmlFor="5">Basen</label>
            <br />
            <input 
                type="checkbox" 
                id="6" 
                checked={formData.surfaceIds.has("6")}
                onChange={handleChange}
                name="surfaceIds"
            />
            <label htmlFor="6">Syntetyczna</label>
            <br />
            <input 
                type="checkbox" 
                id="7" 
                checked={formData.surfaceIds.has("7")}
                onChange={handleChange}
                name="surfaceIds"
            />
            <label htmlFor="7">Inne</label>
            <br />
            <br />
        </div>
        <div className="filter--numberOfPlayers">
            <h4>Otoczenie</h4>
            <input 
                type="checkbox" 
                id="1" 
                checked={formData.surroundingIds.has("1")}
                onChange={handleChange}
                name="surroundingIds"
            />
            <label htmlFor="1">Wewnątrz</label>
            <br />
            <input 
                type="checkbox" 
                id="2" 
                checked={formData.surroundingIds.has("2")}
                onChange={handleChange}
                name="surroundingIds"
            />
            <label htmlFor="2">Na zewnątrz</label>
            <br />
            <br />
        </div>
        <div className="filter--price">
            <h4>Cena</h4>
            <input 
                type="radio" 
                id="isFree" 
                checked={formData.payable === "free"}
                onChange={handleChange}
                name="payable"
                value="free"
            />
            <label htmlFor="isFree">Bezpłatne</label>
            <br />
            <input 
                type="radio" 
                id="isPaid" 
                checked={formData.payable === "paid"}
                onChange={handleChange}
                name="payable"
                value="paid"
            />
            <label htmlFor="isPaid">Płatne</label>
            <br />
            <br />
        </div>
        <button className="filter--button">Filtruj</button>
    </form>
)
}