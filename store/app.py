import os
from flask import Flask, request, send_file, jsonify, send_from_directory
from flask_cors import CORS  # Importe o CORS
import openpyxl
from openpyxl.utils import get_column_letter

app = Flask(__name__)
CORS(app)  # Adicione o middleware do CORS ao aplicativo

data = {
    "clients": [],
    "sellers": [],
    "products": []
}

@app.route('/add_data', methods=['POST'])
def add_data():
    data_type = request.form['type']
    data_item = dict(request.form)
    data_item.pop('type')
    data[data_type].append(data_item)
    return 'Data added successfully'

@app.route('/generate_xlsx', methods=['POST'])
def generate_xlsx():
    try:
        received_data = request.get_json()

        clients = received_data['clients']
        sellers = received_data['sellers']
        products = received_data['products']

        filename = 'data.xlsx'
        file_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'downloads', filename)

        workbook = openpyxl.Workbook()
        sheet = workbook.active
        sheet.title = 'Data'

        client_headers = ['Name', 'Date', 'CPF', 'Origin', 'Score']
        seller_headers = ['Name', 'Matrícula']
        product_headers = ['Name', 'Value', 'Category']

        headers = client_headers + seller_headers + product_headers
        sheet.append(headers)

        for client in clients:
            client_data = [client.get(header, '') for header in client_headers]
            sheet.append(client_data)

        for seller in sellers:
            seller_data = [seller.get(header, '') for header in seller_headers]
            sheet.append(seller_data)

        for product in products:
            product_data = [product.get(header, '') for header in product_headers]
            sheet.append(product_data)

        workbook.save(file_path)

        return jsonify({'message': f'XLSX file generated successfully', 'file_path': file_path})
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/download_file/<filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(os.path.join(os.path.abspath(os.path.dirname(__file__)), 'downloads'), filename, as_attachment=True)

if __name__ == '__main__':
    os.makedirs('downloads', exist_ok=True)
    app.run(debug=True)
