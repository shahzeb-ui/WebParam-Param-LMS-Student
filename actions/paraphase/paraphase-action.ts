import { ParaphraseResponse, PARAPHRASE_URL } from "@/interfaces/pharaphase/paraphase-d";

export const FetchParaphrase = async (documentId: string): Promise<ParaphraseResponse[]> => {
    try {
        const response = await fetch(`${PARAPHRASE_URL}/${documentId}`, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch paraphrase data.');
        }

        const data: ParaphraseResponse[] = await response.json();
        console.log('Paraphrase data: ', data);
        return data;
    } catch (error) {
        console.error('Fetching paraphrase error: ', error);
        throw error;
    }
};
