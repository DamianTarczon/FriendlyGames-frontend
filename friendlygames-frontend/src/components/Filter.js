import React, {useState} from "react";

export default function Filter() {
    const [formData, setFormData] = useState(
        {
            location: "",
            isRecreational: false,
            isSemi_advanced: false,
            isAdvanced: false,
            isGrass: false,
            isCourt: false,
            isSand: false,
            isHall: false,
            isPool: false,
            isSynthetic: false,
            isOthers: false,
            isOutside: false,
            isInside: false,
            isFree: false,
            isPaid: false
        }
    )

function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

return (
    <form className="filter--div">
        <div className="filter--header">
            <h4>Filtruj według następujących kryteriów:</h4>
        </div>
        <div className="filter--location">
            <h4>Lokalizacja</h4>
            <select 
                id="location"
                className="form--location"
                value={formData.location}
                onChange={handleChange}
                name="location"
            >
                <option value="">- wybierz -</option>
                <option value="Kraków">Kraków</option>
                <option value="Tarnów">Tarnów</option>
            </select>
            <br />
            <br />
        </div>
        <div className="filter--gameLvl">
            <h4>Poziom</h4>
            <input 
                type="checkbox" 
                id="isRecreational" 
                checked={formData.isRecreational}
                onChange={handleChange}
                name="isRecreational"
            />
            <label htmlFor="isRecreational">Rekreacyjny</label>
            <br />
            <input 
                type="checkbox" 
                id="isSemi_advanced" 
                checked={formData.isSemi_advanced}
                onChange={handleChange}
                name="isSemi_advanced"
            />
            <label htmlFor="isSemi_advanced">Średniozaawansowany</label>
            <br />
            <input 
                type="checkbox" 
                id="isAdvanced" 
                checked={formData.isAdvanced}
                onChange={handleChange}
                name="isAdvanced"
            />
            <label htmlFor="isAdvanced">Zaawansowany</label>
            <br />
            <br />
        </div>
        <div className="filter--surface">
            <h4>Nawierzchnia</h4>
            <input 
                type="checkbox" 
                id="isGrass" 
                checked={formData.isGrass}
                onChange={handleChange}
                name="isGrass"
            />
            <label htmlFor="isGrass">Trawa</label>
            <br />
            <input 
                type="checkbox" 
                id="isCourt" 
                checked={formData.isCourt}
                onChange={handleChange}
                name="isCourt"
            />
            <label htmlFor="isCourt">Kort</label>
            <br />
            <input 
                type="checkbox" 
                id="isSand" 
                checked={formData.isSand}
                onChange={handleChange}
                name="isSand"
            />
            <label htmlFor="isSand">Piasek</label>
            <br />
            <input 
                type="checkbox" 
                id="isHall" 
                checked={formData.isHall}
                onChange={handleChange}
                name="isHall"
            />
            <label htmlFor="isHall">Hala</label>
            <br />
            <input 
                type="checkbox" 
                id="isPool" 
                checked={formData.isPool}
                onChange={handleChange}
                name="isPool"
            />
            <label htmlFor="isPool">Basen</label>
            <br />
            <input 
                type="checkbox" 
                id="isSynthetic" 
                checked={formData.isSynthetic}
                onChange={handleChange}
                name="isSynthetic"
            />
            <label htmlFor="isSynthetic">Syntetyczna</label>
            <br />
            <input 
                type="checkbox" 
                id="isOthers" 
                checked={formData.isOthers}
                onChange={handleChange}
                name="isOthers"
            />
            <label htmlFor="isOthers">Inne</label>
            <br />
            <br />
        </div>
        <div className="filter--numberOfPlayers">
            <h4>Otoczenie</h4>
            <input 
                type="checkbox" 
                id="isOutside" 
                checked={formData.isOutside}
                onChange={handleChange}
                name="isOutside"
            />
            <label htmlFor="isOutside">Na zewnątrz</label>
            <br />
            <input 
                type="checkbox" 
                id="isInside" 
                checked={formData.isInside}
                onChange={handleChange}
                name="isInside"
            />
            <label htmlFor="isInside">Wewnątrz</label>
            <br />
            <br />
        </div>
        <div className="filter--price">
            <h4>Cena</h4>
            <input 
                type="checkbox" 
                id="isFree" 
                checked={formData.isFree}
                onChange={handleChange}
                name="isFree"
            />
            <label htmlFor="isFree">Bezpłatne</label>
            <br />
            <input 
                type="checkbox" 
                id="isPaid" 
                checked={formData.isPaid}
                onChange={handleChange}
                name="isPaid"
            />
            <label htmlFor="isPaid">Płatne</label>
            <br />
            <br />
        </div>
        <button className="filter--button">Submit</button>
    </form>
)
}