# Importando os módulos necessários
import os

# Diretório onde estão as imagens
diretorio_imagens = "emporiorbelezachic"

# Obtendo a lista de arquivos no diretório
arquivos = os.listdir(diretorio_imagens)

# Filtrando apenas os arquivos de imagem (por extensão)
imagens = [arquivo for arquivo in arquivos if arquivo.lower().endswith((".jpg", ".jpeg", ".png"))]

# Gerando o HTML para exibir as imagens
html = "<html><body>"
for imagem in imagens:
    html += f'<img src="{diretorio_imagens}/{imagem}" alt="{imagem}"><br>'
html += "</body></html>"

# Escrevendo o HTML em um arquivo
with open("index.html", "w") as arquivo_html:
    arquivo_html.write(html)

print("Arquivo index.html gerado com sucesso!")
