import { InputValues } from "./InputValues";

interface Props {
  endpoint: string;
}

export const createCalculateNRC = ({ endpoint }: Props) => {

  const calculateNRC = async (values: InputValues): Promise<number | null> => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        return result.nucRate;
      } else {
        console.error('Failed to fetch result from server');
        return null;
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      return null;
    }
  };

  return calculateNRC;
};