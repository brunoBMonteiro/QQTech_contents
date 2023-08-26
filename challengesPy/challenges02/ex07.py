numero = int(input("Digite um número inteiro: "))

def fatores_primos(numero):
    fatores = []
    divisor = 2
    
    while numero > 1:
        while numero % divisor == 0:
            fatores.append(divisor)
            numero //= divisor
        divisor += 1
    
    return fatores

lista_fatores = fatores_primos(numero)
print(f"Fatores primos de {numero}: {lista_fatores}")
