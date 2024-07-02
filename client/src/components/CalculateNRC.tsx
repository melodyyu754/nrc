import { InputValues } from "./InputValues";

interface Props {
  calculatorApiEndpoint: string; // Endpoint for the original calculator API
  loggingApiEndpoint: string; // Endpoint for your API Gateway
  calculatorName: string;      // Name of the specific calculator (BHN, BIMN, etc.)
}

export const createCalculateNRC = ({ calculatorApiEndpoint, loggingApiEndpoint, calculatorName }: Props) => {
  const calculateNRC = async (values: InputValues): Promise<number | null> => {
    try {
      // 1. Fetch from Calculator API
      const response = await fetch(calculatorApiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        const output = result.nucRate;

        console.log('Calculation result:', output);

        // 2. Send Log Data to API Gateway
        const logData = {
          calculatorName,
          timestamp: new Date().toISOString(),
          inputData: values,
          output,
        };

        await fetch(loggingApiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(logData),
        });
        console.log('Log data sent:', logData);

        return output; // Return the calculated value
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






// import { InputValues } from "./InputValues";

// interface Props {
//   endpoint: string;
// }

// export const createCalculateNRC = ({ endpoint }: Props) => {
//   const calculateNRC = async (values: InputValues): Promise<number | null> => {
//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         return result.nucRate;
//       } else {
//         console.error('Failed to fetch result from server');
//         return null;
//       }
//     } catch (error) {
//       console.error('Error during fetch:', error);
//       return null;
//     }
//   };

//   return calculateNRC;
// };
