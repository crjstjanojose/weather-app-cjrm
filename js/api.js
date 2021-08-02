const chaveAPI = "Lm1Z4ZYUVIXkOxeR6kahuAmlAuEb6Q1G";
const urlBaseAPI = "http://dataservice.accuweather.com/";

const obterDadosLocalidade = async (denominacao) => {
  try {
    const resposta = await fetch(
      `${urlBaseAPI}locations/v1/cities/search?apikey=${chaveAPI}&q=${denominacao}`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao tentar obter identificador da cidade");
    }

    return resposta.json();
  } catch (error) {
    alert(`Error : ${error.message}`);
  }
};

const obterTemperaturaLocalidade = async (Key) => {
  try {
    const resposta = await fetch(
      `${urlBaseAPI}currentconditions/v1/${Key}?apikey=${chaveAPI}&language=pt-br`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao obter dados da temperatura da cidade desejada");
    }

    return resposta.json();
  } catch (error) {
    alert(`Error : ${error.message}`);
  }
};
