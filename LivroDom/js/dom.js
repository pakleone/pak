var acervo = [{"titulo":"1984","autor":"George Owell"},
			{"titulo":"Captães de Areia","autor":"Jorge Amado"},
			{"titulo":"Brás Cubas","autor":"Machado de Assis"}]

$(function(){
	loadAcervo();

	$("#adicionar").click(onAdicionarClick);

	$("#livrosLidos").on("click", ".icone", onIconeClick);
	
});

function loadAcervo() {
	$.each(acervo, function(indice, livro) {
		$("#livrosLidos")
			.append($("<tr/>")
				.append($("<td/>").text(livro.titulo))
				.append($("<td/>").text(livro.autor))
				.append($("<td/>")
					.append($("<img/>")
					.addClass("icone")
					.attr("src", "./img/lixeira.png"))));
	});
}
 
function onAdicionarClick(){
	/*
	var titulo = $*("#livro").val();
	var autor = $*("#autor").val();
	var $linha = $("<tr/>");
	var $colAutor, $colTitulo;
	$colTitulo = $("<td />");
	$colAutor = $("<td />");
	$colOperacao = $("<td />");

	$colTitulo.text(titulo);	
	$colAutor.text(autor);
	$linha.append($colTitulo);
	$linha.append($colAutor);
	$("#livrosLidos").append($linha);
	*/

	$("#livrosLidos")
			.append($("<tr/>")
				.append($("<td/>").text($("#livro").val()))
				.append($("<td/>").text($("#autor").val()))
				.append($("<td/>")
					.append($("<img/>")
					.addClass("icone")
					.attr("src", "./img/lixeira.png"))));                     
}

function onIconeClick(){
	$(this).parents("tr").remove();
}

