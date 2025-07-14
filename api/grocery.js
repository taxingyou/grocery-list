export default function handler(req, res) {
  res.status(200).json({ items: ["milk", "eggs", "bread"], fallback: true });
}
