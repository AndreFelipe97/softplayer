import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../Card";

interface Data {
    id: number;
    thumbnail: {
        path: string;
        extension: string;
    };
    name: string;
}

export function CardList() {
    const [infoCharacters, setSetInfoCharacters] = useState<Array<Data>>([])
    
    useEffect(() => {
        async function getValues() {
            const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters`, {
                params: {
                    apikey: `${process.env.REACT_APP_API_KEY}`,
                    hash: `${process.env.REACT_APP_HASH}`,
                    ts: `${process.env.REACT_APP_TS}`,
                }
            });
            console.log(response.data.data.results)
            setSetInfoCharacters(response.data.data.results);
        }
        getValues();
    }, []);

    return (
        <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {
                infoCharacters.map((infoCharacter: Data) => (
                    <Card key={String(infoCharacter.id)} id={infoCharacter.id} imgPath={`${infoCharacter.thumbnail.path}/portrait_incredible.jpg`} name={infoCharacter.name}/>
                ))
            }
        </SimpleGrid>
    );
}