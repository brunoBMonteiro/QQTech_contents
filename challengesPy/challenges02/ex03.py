tamanho_lado = float(input('Digite tamanho do lado: ')) 

def calcula_area_quadrado(lado):
    area = lado ** 2
    return area

area_quadrado = calcula_area_quadrado(tamanho_lado)
print(f'A área do quadrado é: {area_quadrado}')