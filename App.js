import react, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [numeroDigitato, setNumeroDigitato] = useState(
    "Non è stato cliccato nulla"
  );
  const [totale, setTotale] = useState(0);
  const [numeri, setNumeri] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
          }}
        >
          Benvenuti nella mia Calcolatrice
        </Text>
        <Text>{numeroDigitato}</Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#2271b3",
          padding: 10 * 2,
          borderTopStartRadius: 10 * 2,
          borderTopEndRadius: 10 * 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {numeri.map((numero) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setNumeroDigitato("Hai digitato il numero " + numero),
                      setTotale(totale + numero);
                  }}
                >
                  <Text
                    style={{
                      padding: 10,
                      fontSize: 10 * 3,
                    }}
                  >
                    {numero}
                  </Text>
                </TouchableOpacity>
              </>
            );
          })}

          <TouchableOpacity
            onPress={() => {
              setNumeroDigitato("Il risultato è " + totale), setTotale(0);
            }}
          >
            <Text
              style={{
                padding: 10,
                fontSize: 10 * 3,
              }}
            >
              =
            </Text>
          </TouchableOpacity>
       <TouchableOpacity
            onPress={() => {
              setNumeroDigitato("Il risultato è " + totale), setTotale(0);
            }}
          >
            <Text
              style={{
                padding: 10,
                fontSize: 10 * 3,
              }}
            >
              x
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
