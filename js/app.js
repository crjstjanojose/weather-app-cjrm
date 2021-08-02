const formBusca = document.querySelector('[data-js="form-busca"]');
const resultado = document.querySelector('[data-js="resultado"]');
const resultadoImagem = document.querySelector('[data-js="resultado-imagem"]');
const resultadoIcone = document.querySelector(
  '[data-js="resultado-imagem-icone"]'
);
const resultadoCidade = document.querySelector('[data-js="resultado-cidade"]');
const resultadoDescricao = document.querySelector(
  '[data-js="resultado-descricao"]'
);
const resultadoTemperatura = document.querySelector(
  '[data-js="resultado-temperatura"]'
);

const gerarHTMLResultado = (
  LocalizedName,
  WeatherText,
  WeatherIcon,
  IsDayTime,
  Temperature
) => {
  IsDayTime
    ? (resultadoImagem.src = "./img/day.svg")
    : (resultadoImagem.src = "./img/night.svg");

  resultado.classList.contains("hidden")
    ? resultado.classList.remove("hidden")
    : "";

  resultadoIcone.src = `./img/icons/${WeatherIcon}.svg`;
  resultadoCidade.innerText = LocalizedName;
  resultadoDescricao.innerText = WeatherText;
  resultadoTemperatura.innerText = Temperature.Metric.Value;
};

formBusca.addEventListener("submit", async (event) => {
  event.preventDefault();

  const denominacao = event.target.cidade.value;
  const [{ Key, LocalizedName }] = await obterDadosLocalidade(denominacao);
  const [{ WeatherText, WeatherIcon, IsDayTime, Temperature }] =
    await obterTemperaturaLocalidade(Key);

  gerarHTMLResultado(
    LocalizedName,
    WeatherText,
    WeatherIcon,
    IsDayTime,
    Temperature
  );

  formBusca.reset();
});
