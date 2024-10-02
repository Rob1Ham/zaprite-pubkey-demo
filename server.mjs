import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const apiKey = '6b777fbc-948d-47e4-bb8c-e2c70a41b976';

app.post('/api/createOrder', async (req, res) => {
  try {
    const { amount, currency, label } = req.body;

    // Convert amount to cents
    const amountInCents = Math.round(parseFloat(amount) * 100);

    console.log('Sending request to Zaprite API:', JSON.stringify({ ...req.body, amount: amountInCents }));
    const response = await fetch('https://api.zaprite.com/v1/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        amount: amountInCents,
        currency: currency,
        label: label,
        redirectUrl: 'https://your-redirect-url.com', // Replace with your actual redirect URL
        externalUniqId: `order_${Date.now()}` // Generate a unique ID for each order
      })
    });

    const responseText = await response.text();
    console.log('Zaprite API response:', responseText);

    if (!response.ok) {
      throw new Error(`Failed to create order: ${response.status} ${responseText}`);
    }

    const data = JSON.parse(responseText);
    res.json({
      orderId: data.id,
      checkoutUrl: data.checkoutUrl,
      status: data.status
    });
  } catch (error) {
    console.error('Error in createOrder:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});