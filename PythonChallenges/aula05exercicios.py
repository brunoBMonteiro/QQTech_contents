import psycopg2

host = "127.0.0.1"
port = 5432
db = "postgres"
user = "postgres"
passwd = "postgres"

with psycopg2.connect(
    host=host,
    dbname=db,
    port=port,
    user=user,
    password=passwd
) as conn:
    with conn.cursor() as cursor:
        # a) As linhas que correspondem a pessoas de São Paulo
        cursor.execute('SELECT * FROM public.treinamento WHERE cidade = %s', ('São Paulo',))
        resultado_a = cursor.fetchall()
        print("Resultado (a):")
        for row in resultado_a:
            print(row)

        # b) As linhas que correspondem a pessoas com idade entre 22 e 27 anos
        cursor.execute('SELECT * FROM public.treinamento WHERE idade BETWEEN %s AND %s', (22, 27))
        resultado_b = cursor.fetchall()
        print("\nResultado (b):")
        for row in resultado_b:
            print(row)

        # c) As cidades das pessoas com o nome Maria
        cursor.execute('SELECT cidade FROM public.treinamento WHERE nome = %s', ('Maria',))
        resultado_c = cursor.fetchall()
        print("\nResultado (c):")
        for row in resultado_c:
            print(row)

        # 3) Insira na tabela 2 novas linhas com dados fictícios
        novos_dados = [
            ('Teste1', 27, 'Caçapava do Sul'),
            ('Teste2', 23, 'Bagé')
        ]
        cursor.executemany('INSERT INTO public.treinamento (nome, idade, cidade) VALUES (%s, %s, %s)', novos_dados)

        # Confirma a transação para efetivar as inserções no banco de dados QQ TECH.
        conn.commit()
