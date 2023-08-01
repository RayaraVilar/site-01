function calcularIMC() {
    var peso = parseInt(document.getElementById("valor1").value);
    var altura = parseInt(document.getElementById("valor2").value);
    var imc = (peso / altura**2)*10000;
  
    if (isNaN(imc)) {
      document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para peso e altura.";
  } else {
      document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(1);
  } 

  if (imc < 18.5){
    document.getElementById("inforesultado").innerHTML = "Olá! o seu IMC indicou que você está abaixo do peso, é importante tomar algumas medidas para garantir a sua saúde e bem-estar. Primeiramente, é fundamental que você avalie a sua alimentação. Certifique-se de que está ingerindo uma quantidade adequada de nutrientes, como proteínas, carboidratos, gorduras saudáveis, vitaminas e minerais. Busque alimentos naturais e frescos, e evite alimentos processados e industrializados. Além disso, é importante que você pratique atividades físicas regularmente, pois isso pode ajudar a estimular o apetite e a ganhar peso de forma saudável. Uma dica é procurar um profissional de educação física para elaborar um plano de treinamento adequado às suas necessidades. Também é importante evitar o uso de dietas restritivas ou suplementos sem orientação médica ou nutricional. Essas práticas podem ser prejudiciais à sua saúde e acabar agravando ainda mais a situação. Por fim, se você está preocupado com o seu peso, não hesite em procurar ajuda profissional. Um médico ou nutricionista pode avaliar a sua situação de forma mais precisa e elaborar um plano de cuidados adequado às suas necessidades individuais. Lembre-se, a sua saúde é o seu maior patrimônio e é importante cuidar dela sempre!"
  } else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById("inforesultado").innerHTML = "Parabéns! É uma grande conquista descobrir que você está no peso ideal de acordo com o seu Índice de Massa Corporal (IMC). Sua dedicação e cuidado com a saúde estão valendo a pena. Manter-se dentro do peso adequado é um passo importante para garantir o bem-estar físico e emocional. Lembre-se de que o peso ideal é resultado de um estilo de vida equilibrado, que envolve alimentação saudável e prática regular de exercícios físicos. Continue a valorizar esses hábitos e procure mantê-los ao longo do tempo. Cuidar de si mesmo é um ato de amor próprio e investir na sua saúde é uma escolha que traz inúmeros benefícios. Aproveite essa conquista e sinta-se orgulhoso(a) do seu esforço. Continue se cuidando e inspirando outras pessoas a trilharem um caminho de bem-estar e equilíbrio."
  } else if (imc >24.9 && imc <= 29.9) {
    document.getElementById("inforesultado").innerHTML = "Após analisar seus resultados do Índice de Massa Corporal (IMC), observei que você está levemente acima do peso recomendado para a sua altura. Gostaria de ressaltar que essa informação não é motivo para alarme, mas sim uma oportunidade de cuidar da sua saúde e bem-estar."
  } else if (imc >29.9 && imc < 34.9) {
    document.getElementById("inforesultado").innerHTML = "Após avaliar seus resultados do Índice de Massa Corporal (IMC), gostaria de informar que você está na faixa de obesidade grau I. Isso significa que seu peso está acima do recomendado para a sua altura, o que pode impactar negativamente sua saúde geral. Recomendo que você busque ajuda profissional para orientação adequada e uma melhor qualidade de vida."
  } else if (imc >= 35 && imc < 39.9) {
    document.getElementById("inforesultado").innerHTML = "Após avaliar seus resultados do Índice de Massa Corporal (IMC), gostaria de informar que você está na faixa de obesidade grau II. Compreendo que essa notícia possa ser desafiadora, mas quero enfatizar que é possível melhorar sua saúde e bem-estar com as medidas adequadas.Recomendo fortemente que você busque ajuda profissional o mais rápido possível. Um médico especializado, nutricionista e educador físico poderão fornecer a orientação necessária e um plano de ação personalizado para enfrentar a obesidade grau II. Eles têm o conhecimento e as ferramentas para ajudá-lo(a) a alcançar um peso saudável e melhorar sua qualidade de vida."
  } else if (imc >= 39.0) {
    document.getElementById("inforesultado").innerHTML = "Após avaliar seus resultados do Índice de Massa Corporal (IMC), gostaria de informar que você está na faixa de obesidade mórbida. Entendo que essa notícia possa ser impactante, mas estou aqui para oferecer apoio e incentivo enquanto você busca melhorar sua saúde e bem-estar. A obesidade mórbida é uma condição grave que requer atenção médica especializada. É fundamental que você procure ajuda profissional o mais rápido possível."
  } else {
    document.getElementById("inforesultado").style.display = 'hidden';
  }
}
