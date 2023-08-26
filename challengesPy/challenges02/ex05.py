num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
num3 = float(input("Digite o terceiro número: "))

def somar_numeros(num1, num2, num3):
    soma = num1 + num2 + num3
    return soma

resultado = somar_numeros(num1, num2, num3)
print(f"A soma dos números é: {resultado}")