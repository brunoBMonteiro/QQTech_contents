from flask import Flask, request, jsonify
import openpyxl

app = Flask(__name__)

@app.route('/generate_xlsx', methods=['POST'])
def generate_xlsx():
    try:
        data = request.get_json()

        clients = data['clients']
        sellers = data['sellers']
        products = data['products']

        filename = 'data.xlsx'
        workbook = openpyxl.Workbook()
        sheet = workbook.active
        sheet.title = 'Data'

        # Restante do seu código de geração de arquivo XLSX

        return jsonify({'message': f'XLSX file generated successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()
