const generateHtml = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tax Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .invoice {
            background: #fff;
            padding: 20px;
            max-width: 800px;
            margin: auto;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
        }
        .header img {
            max-width: 50px;
            margin-top: 10px;
        }
        .bill-to, .invoice-details {
            margin-bottom: 20px;
            font-size: 14px;
        }
        .bill-to, .invoice-details {
            width: 100%;
            margin-bottom: 10px;
        }
        .bill-to p, .invoice-details p {
            margin: 5px 0;
        }
        .bill-to {
            float: none;
            text-align: left;
        }
        .invoice-details {
            float: none;
            text-align: left;
        }
        @media(min-width: 600px) {
            .bill-to {
                float: left;
                width: 48%;
            }
            .invoice-details {
                float: right;
                width: 48%;
                text-align: right;
            }
        }
        .clear {
            clear: both;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 14px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background: #f4f4f4;
        }
        tfoot{
            font-weight: 700;
        }
        .terms {
            font-size: 12px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
        }
        .footer .sign {
            margin-top: 40px;
        }
        .qr-code {
            float: none;
            text-align: center;
            margin-top: 10px;
        }
        @media(min-width: 600px) {
            .qr-code {
                float: left;
                text-align: left;
            }
        }
    </style>
</head>
<body>
    <div class="invoice">
        <div class="header">
            <h1>DELIGHT R.O POINT</h1>
            <p>Shop No 47 A Pradhan Chowk Sadhnagar Palam Colony New Delhi 110045</p>
            <p>Phone no.: +91 9318610690 | Email: mi200194@gmail.com</p>
        </div>

        <div class="bill-to">
            <p><strong>Bill To:</strong></p>
            <p>${customer.customerName} UID 576</p>
            <p>${customer.address}</p>
            <p>Contact No: ${saleData.mobileNumber}</p>
        </div>

        <div class="invoice-details">
            <p><strong>Invoice Details:</strong></p>
            <p>Invoice No: ${saleData._id}</p>
            <p>Date: ${new Date(saleData.createdAt).toLocaleDateString()}</p>
            <p>Time: 01:41 PM</p>
        </div>

        <div class="clear"></div>

        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price/unit</th>
                    <th>Discount</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                ${services.map(service => `
                  <tr>
                      <td>${service.serviceName?.serviceName || 'N/A'}</td>
                      <td>${service.quantity || 'N/A'}</td>
                      <td>₹${service.rate || 'N/A'}</td>
                      <td>${service.serviceName?.discountPercentage || 'N/A'}%</td>
                      <td>₹${service.totalAmount || 'N/A'}</td>
                  </tr>
              `).join('')}

            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td colspan="2">2</td>
                    <td >₹250</td>
                    <td>₹250</td>
                </tr>
            </tfoot>
        </table>

        <table>
            <tr>
                <td>Sub Total</td>
                <td>₹400</td>
            </tr>
            <tr>
                <td>Discount</td>
                <td>₹100</td>
            </tr>
            <tr>
                <td>Total</td>
                <td><strong>₹300</strong></td>
            </tr>
            <tr>
                <td>Invoice Amount In Words</td>
                <td><strong>${convertNumberToWords(saleData.totalAmount)} Only</strong></td>
            </tr>
            <tr>
                <td>Received</td>
                <td>₹100</td>
            </tr>
            <tr>
                <td>Balance</td>
                <td>₹200</td>
            </tr>
            <tr>
                <td>You Saved</td>
                <td>₹100</td>
            </tr>
        </table>

        <div class="terms">
            <p><strong>Terms And Conditions:</strong></p>
            <ol>
                <li>One Year MFG Defect</li>
                <li>Electrical item Warranty</li>
                <li>All Service Charges Valid</li>
                <li>Installation ₹350 & GST ₹50</li>
                <li>Late payment Charge ₹300</li>
                <li>Sold goods will not be returned.</li>
                <li>Warranty will not cover wear and tear.</li>
            </ol>
        </div>

        <div class="footer">
            <div class="qr-code">
                <p>Scan to Pay</p>
                <img src="qr-code-placeholder.png" alt="QR Code" width="100">
            </div>

            <div class="sign">
                <p>For: DELIGHT R.O POINT</p>
                <p>________________________</p>
                <p>Authorized Signatory</p>
            </div>
        </div>
    </div>
</body>
</html>
`;
};
