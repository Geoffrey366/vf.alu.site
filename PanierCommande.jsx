
import { useState } from "react";

export default function PanierCommande() {
  const [panier, setPanier] = useState([
    { nom: "Mini-pelle", quantite: 1, prix: 80 },
    { nom: "Carport 3x5 m", quantite: 1, prix: 950 },
  ]);

  const total = panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1 style={{ fontSize: '2rem', color: '#1e40af' }}>Votre panier</h1>
      {panier.map((item, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: 10 }}>
          <div>{item.nom} (x{item.quantite})</div>
          <div>{(item.prix * item.quantite).toFixed(2)} €</div>
        </div>
      ))}
      <h2 style={{ textAlign: 'right', color: '#1e3a8a' }}>Total : {total.toFixed(2)} €</h2>
      <form style={{ marginTop: 20 }}>
        <div><input placeholder="Nom complet" style={{ width: '100%', marginBottom: 10 }} /></div>
        <div><input type="email" placeholder="Email" style={{ width: '100%', marginBottom: 10 }} /></div>
        <div><textarea placeholder="Adresse de livraison" style={{ width: '100%', marginBottom: 10 }} /></div>
        <button type="submit" style={{ backgroundColor: '#1e40af', color: 'white', padding: 10, width: '100%' }}>
          Valider la commande
        </button>
      </form>
    </main>
  );
}
