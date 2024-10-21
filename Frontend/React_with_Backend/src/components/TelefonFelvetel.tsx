import { useState } from "react";

export default function TelefonFelvetel() {

    const [brand,setBrand] = useState<string>('');
    const [model,setModel] = useState<string>('');
    const [price,setPrice] = useState<number>();

    const[error, setErrorData] = useState<boolean>();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        console.log(brand + " " + model + " " + price)

        const newPhone = {
            brand: brand,
            model: model,
            price: price
        }
       

        try{
            const response = await fetch("http://localhost:3000/phones", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPhone)
            })
            if(!response.ok)
            {
                const errorData = await response.json()
                setErrorData(errorData.error)
                throw new Error(`Hiba történt: : ${response.status} `)
            }

            setBrand(''); setModel(''); setPrice(0);
        } catch(err: any){
            setErrorData(err.message)
        }

    }


    return (
        <>
            <h2>Telefon felvetel</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="brand">Brand:</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} /><br />
                {brand} <br />

                <label htmlFor="brand">Model:</label>
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} /><br />
                {model} <br />

                <label htmlFor="brand">Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                {price} <br />

                <button type="submit" >Telefon Felvetele</button>
              
            </form>
        </>
    )

}