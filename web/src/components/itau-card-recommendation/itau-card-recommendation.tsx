import { Component, h } from '@stencil/core';

@Component({
  tag: 'itau-card-recommendation',
  styleUrl: 'itau-card-recommendation.css',
  shadow: true,
})
export class ItauCardRecommendation {
  render() {
    return (
      <div class="phone-mockup">
        <div class="phone-screen">


          {/* Screen Header */}
          <header class="screen-header">
            <button type="button" class="icon-button" aria-label="Voltar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button type="button" class="icon-button icon-button--help" aria-label="Ajuda">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M9.09 9C9.325 8.33 9.757 7.768 10.309 7.389C10.86 7.01 11.503 6.835 12.146 6.887C12.789 6.939 13.397 7.215 13.87 7.67C14.342 8.125 14.651 8.73 14.741 9.386C14.831 10.042 14.697 10.71 14.359 11.278C14.021 11.846 13.499 12.28 12.875 12.508C12.56 12.62 12.281 12.82 12.069 13.084C11.857 13.349 11.72 13.668 11.673 14.008" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="17" r="1" fill="currentColor"/>
              </svg>
            </button>
          </header>

          {/* Main Title */}
          <div class="main-title">
            <h1>Temos uma recomendação personalizada para você</h1>
          </div>

          {/* Main Content */}
          <div class="main-content">
            {/* Primary Card - Limite Increase */}
            <section class="card card--primary">
              <div class="card__header">
                <span class="chip chip--info">Novo limite disponível</span>
                <span class="chip chip--brand">VISA</span>
              </div>

              <h2 class="card__title">Aumente o limite do seu cartão Platinum</h2>
              
              <div class="card__limit-info">
                <p class="limit-from">Limite de R$ 5.000,00 para</p>
                <p class="limit-to">R$ 8.000,00</p>
              </div>

              {/* Card Visual */}
              <div class="card-visual card-visual--orange">
                <div class="card-visual__inner">
                  <div class="card-visual__chip"></div>
                  <div class="card-visual__number">**** 4321</div>
                </div>
              </div>

              <div class="card__details">
                <p class="card__details-amount">+ R$ 3.000,00 aprovado para você</p>
                <p class="card__details-card">No cartão Itaú Platinum final 4321</p>
              </div>

              <button type="button" class="button button--primary button--full">
                Aumentar limite agora
              </button>
            </section>

            {/* Explore More Cards Section */}
            <section class="explore-section">
              <h2 class="section-title">Explore mais cartões</h2>

              {/* Filter Chips */}
              <div class="filter-chips">
                <button type="button" class="chip chip--filter chip--filter-active">
                  Mensalidade grátis
                </button>
                <button type="button" class="chip chip--filter">
                  Programa de pontos
                </button>
              </div>

              {/* LATAM Card */}
              <div class="card card--secondary">
                <div class="card__header">
                  <span class="chip chip--outline">Limite inicial R$ 8.000,00</span>
                  <span class="chip chip--brand">VISA</span>
                </div>

                {/* Card Visual */}
                <div class="card-visual card-visual--red">
                  <div class="card-visual__inner">
                    <div class="card-visual__logo">LATAM</div>
                    <div class="card-visual__chip"></div>
                  </div>
                </div>

                <h3 class="card__title">LATAM Pass Itaú Gold</h3>
                <p class="card__subtitle">Ganhe 2 mil milhas bônus</p>

                {/* Benefits List */}
                <ul class="card-list">
                  <li>1,6 milhas = 1 dólar gasto</li>
                  <li>
                    Grátis ao gastar R$ 2 mil por fatura
                    <span class="card-list-note">ou mensalidade de R$ 44,00</span>
                  </li>
                </ul>

                <button type="button" class="button button--primary button--full">
                  Quero esse cartão
                </button>

                {/* Carousel Dots */}
                <div class="carousel-dots">
                  <span class="dot dot--active"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            </section>

                        {/* Primary Card - Limite Increase */}
            <section class="card card--primary">
              <div class="card__header">
                <span class="chip chip--info">Novo limite disponível</span>
                <span class="chip chip--brand">VISA</span>
              </div>

              <h2 class="card__title">Aumente o limite do seu cartão Itaú Platinum</h2>
              
              <div class="card__limit-info">
                <p class="limit-from">Limite de R$ 5.000,00 para</p>
                <p class="limit-to">R$ 8.000,00</p>
              </div>

              {/* Card Visual */}
              <div class="card-visual card-visual--orange">
                <div class="card-visual__inner">
                  <div class="card-visual__chip"></div>
                  <div class="card-visual__number">**** 4321</div>
                </div>
              </div>

              <div class="card__details">
                <p class="card__details-amount">+ R$ 3.000,00 aprovado para você</p>
                <p class="card__details-card">No cartão Platinum final 4321</p>
              </div>

              <button type="button" class="button button--primary button--full">
                Aumentar limite agora
              </button>
            </section>

          </div>

          {/* Footer Buttons */}
          <footer class="screen-footer">
            <button type="button" class="button button--primary button--full">
              Button label
            </button>
            <button type="button" class="button button--ghost button--full">
             <span>Button label &nbsp;</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M9.09 9C9.325 8.33 9.757 7.768 10.309 7.389C10.86 7.01 11.503 6.835 12.146 6.887C12.789 6.939 13.397 7.215 13.87 7.67C14.342 8.125 14.651 8.73 14.741 9.386C14.831 10.042 14.697 10.71 14.359 11.278C14.021 11.846 13.499 12.28 12.875 12.508C12.56 12.62 12.281 12.82 12.069 13.084C11.857 13.349 11.72 13.668 11.673 14.008" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="17" r="1" fill="currentColor"/>
              </svg>
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
