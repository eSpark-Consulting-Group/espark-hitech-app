@@ -0,0 +1,140 @@
<template>
  <div class="table-container mt-4">
    <table class="table table-striped">
      <thead>
        <tr class="table-head">
          <th scope="col">Mfr Part #</th>
          <th scope="col">Quantity Available</th>
          <th scope="col">Price</th>
          <th scope="col">Series</th>
          <th scope="col">Package</th>
          <th scope="col">Product Status</th>
          <th scope="col">Resistance</th>
          <th scope="col">Tolerance</th>
          <th scope="col">Power (Watts)</th>
          <th scope="col">Composition</th>
          <th scope="col">Features</th>
          <th scope="col">Temperature Coefficient</th>

          <th scope="col">Operating Temperature</th>
          <th scope="col">Package / Case</th>
          <th scope="col">Supplier Device Package</th>
          <th scope="col">Size / Dimension</th>
          <th scope="col">Height - Seated (Max)</th>
          <th scope="col">Number of Terminations</th>
          <th scope="col">Failure Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item['Mfr Part #']">
          <td>{{ item['Mfr Part #'] }}</td>
          <td>{{ item['Quantity Available'] }}</td>
          <td>{{ item['Price'] }}</td>
          <td>{{ item['Series'] }}</td>
          <td>{{ item['Package'] }}</td>
          <td>{{ item['Product Status'] }}</td>
          <td>{{ item['Resistance'] }}</td>
          <td>{{ item['Tolerance'] }}</td>
          <td>{{ item['Power (Watts)'] }}</td>
          <td>{{ item['Composition'] }}</td>
          <td>{{ item['Features'] }}</td>
          <td>{{ item['Temperature Coefficient'] }}</td>
          <td>{{ item['Operating Temperature'] }}</td>
          <td>{{ item['Package / Case'] }}</td>
          <td>{{ item['Supplier Device Package'] }}</td>
          <td>{{ item['Size / Dimension'] }}</td>
          <td>{{ item['Height - Seated (Max)'] }}</td>
          <td>{{ item['Number of Terminations'] }}</td>
          <td>{{ item['Failure Rate'] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          'Mfr Part #': 'ABC123',
          'Quantity Available': 100,
          Price: 10.99,
          Series: 'XYZ',
          Package: 'Package A',
          'Product Status': 'In Stock',
          Resistance: '100 Ohms',
          Tolerance: '5%',
          'Power (Watts)': 1,
          Composition: 'Carbon Film',
          Features: 'High precision',
          'Temperature Coefficient': '±100 ppm/°C',
          'Operating Temperature': '-40°C to +85°C',
          'Package / Case': 'Case A',
          'Supplier Device Package': 'Device Package A',
          'Size / Dimension': '10mm x 5mm',
          'Height - Seated (Max)': '3mm',
          'Number of Terminations': 2,
          'Failure Rate': '1%',
        },
        {
          'Mfr Part #': 'DEF456',
          'Quantity Available': 50,
          Price: 5.49,
          Series: 'UVW',
          Package: 'Package B',
          'Product Status': 'Backordered',
          Resistance: '220 Ohms',
          Tolerance: '10%',
          'Power (Watts)': 0.5,
          Composition: 'Metal Film',
          Features: 'Low noise',
          'Temperature Coefficient': '±50 ppm/°C',
          'Operating Temperature': '-20°C to +70°C',
          'Package / Case': 'Case B',
          'Supplier Device Package': 'Device Package B',
          'Size / Dimension': '7mm x 3mm',
          'Height - Seated (Max)': '2mm',
          'Number of Terminations': 3,
          'Failure Rate': '0.5%',
        },
        {
          'Mfr Part #': 'GHI789',
          'Quantity Available': 200,
          Price: 2.99,
          Series: 'PQR',
          Package: 'Package C',
          'Product Status': 'Discontinued',
          Resistance: '1k Ohms',
          Tolerance: '1%',
          'Power (Watts)': 0.25,
          Composition: 'Thick Film',
          Features: 'High power handling',
          'Temperature Coefficient': '±200 ppm/°C',
          'Operating Temperature': '-10°C to +60°C',
          'Package / Case': 'Case C',
          'Supplier Device Package': 'Device Package C',
          'Size / Dimension': '5mm x 2mm',
          'Height - Seated (Max)': '1mm',
          'Number of Terminations': 1,
          'Failure Rate': '0.2%',
        },
      ],
    }
  },
}
</script>
<style>
.table-container {
  overflow-x: auto;
  max-width: 100%;
}

.table {
  min-width: 800px; /* Adjust the value as needed */
}
.table td {
  white-space: nowrap;
}
</style>
