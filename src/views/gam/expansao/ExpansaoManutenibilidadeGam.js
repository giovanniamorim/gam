import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import React from 'react';

import '../../../scss/_custom.scss';

const ExpansaoManutenibilidadeGam = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardBody>
                        <section>
                            <h4>Manutenibilidade</h4>
                            <hr />
                            <p>A ISO/IEC 25010 [40] define a manutenibilidade como a capacidade de um sistema ser modificado, atualizado e adaptado. Suas subcaracterísticas principais incluem Modularidade, Reusabilidade, Analisabilidade, Modificabilidade e Testabilidade. No contexto do Guia de Adoção ao micro-frontend (GAM), a manutenibilidade dá ênfase ao código, adaptamos os conceitos para focar em Analisabilidade, Modificabilidade e Testabilidade, destacando a importância da análise eficiente, modificação eficaz e testagem robusta do código-fonte em ambientes de micro-frontends.</p>

                            <h5>Analisabilidade:</h5>
                            <ul>
                                <li><strong>Objetivo:</strong> Compreender a estrutura e funcionamento dos micro-frontends para diagnosticar problemas de forma rápida e precisa.</li>
                                <li><strong>Recomendações:</strong>
                                    <ul>
                                        <li>Padrões de Nomenclatura: Adotar convenções de nomenclatura consistentes para facilitar a identificação e compreensão de componentes.</li>
                                        <li>Documentação: Manter documentação detalhada sobre a arquitetura, interações e responsabilidades de cada micro-frontend.</li>
                                        <li>Ferramentas de Análise Estática: Utilizar ferramentas como ESLint e TSLint para análise estática de código, identificando padrões, complexidade e possíveis problemas. Ferramentas mais abrangentes como Sonar podem oferecer uma visão holística da qualidade do código, incluindo métricas de código-fonte, cobertura de código e detecção de possíveis problemas de segurança.</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="blue-box"> <strong>Exemplo Prático: </strong> Um desenvolvedor é designado para atualizar a interface da página de detalhes do produto. Durante o processo, o desenvolvedor segue os padrões de nomenclatura, consulta a documentação para entender a estrutura e as interações, enquanto as ferramentas de análise estática (ESLint e TSLint) sinalizam potenciais melhorias no código. O Sonar complementa essa análise, fornecendo métricas detalhadas e identificando áreas de atenção, resultando em modificações eficientes e seguras no micro-frontend.</div>

                            <h5>Modificabilidade:</h5>
                            <ul>
                                <li><strong>Objetivo:</strong> Permitir modificações eficientes nos micro-frontends sem introduzir defeitos ou degradar a qualidade.</li>
                                <li><strong>Recomendações:</strong>
                                    <ul>
                                        <li>Design Modular: Estruturar os micro-frontends de forma modular, minimizando acoplamento entre eles.</li>
                                        <li>Refatoração Contínua: Incentivar práticas de refatoração para manter o código limpo e adaptável.</li>
                                        <li>Controle de Versão: Utilizar sistemas de controle de versão eficientes, como Git, para rastrear alterações e facilitar reversões se necessário. Ferramentas como o Veracode podem ser incorporadas para realizar análises de segurança estática e dinâmica, ajudando a garantir modificações seguras.</li>
                                    </ul>
                                </li>
                                <div className="blue-box"> <strong>Exemplo Prático: </strong> Uma nova funcionalidade precisa ser adicionada a um dos micro-frontends. Com o design modular, o desenvolvedor pode isolar a implementação da nova funcionalidade sem afetar outras partes do sistema. Durante o processo, práticas contínuas de refatoração garantem que o código permaneça limpo e adaptável. O uso eficiente do controle de versão permite que o desenvolvedor rastreie e gerencie as alterações de maneira organizada. A integração do Veracode verifica possíveis vulnerabilidades de segurança, garantindo modificações seguras antes da implementação.</div>
                            </ul>

                            <h5>Testabilidade:</h5>
                            <ul>
                                <li><strong>Objetivo:</strong> Garantir a efetividade dos testes, permitindo a detecção precoce de falhas e mudanças seguras.</li>
                                <li><strong>Recomendações:</strong>
                                    <ul>
                                        <li>Testes Unitários e de Integração: Implementar testes unitários (usando Jest e Enzyme para React, por exemplo) e de integração para verificar a funcionalidade isolada e a interação entre os micro-frontends.</li>
                                        <li>Automação de Testes: Utilize ferramentas de automação de testes, como Cypress, para agilizar o processo de verificação.</li>
                                        <li>Ambientes de Teste Semelhantes à Produção: Manter ambientes de teste que reproduzam fielmente as condições de produção para validar o comportamento real do sistema.</li>
                                    </ul>
                                </li>
                                <div className="blue-box"> <strong>Exemplo Prático: </strong> Uma nova funcionalidade é adicionada a um micro-frontend específico. Os testes unitários garantem que a funcionalidade isolada funcione conforme o esperado, utilizando ferramentas como Jest para validar componentes React. Testes de integração, incorporando ferramentas como Cypress, verificam a interação entre os diferentes micro-frontends. A automação desses testes agiliza o processo de verificação, permitindo que a equipe de desenvolvimento detecte precocemente quaisquer falhas potenciais. Ao manter ambientes de teste semelhantes à produção, a equipe assegura que as condições reais do sistema sejam simuladas, validando de forma abrangente o comportamento do micro-frontend antes da implantação.</div>
                            </ul>


                        </section>
                    </CCardBody>
                </CCard>
                <CCard>
                    <CCardBody>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <CButton color="primary" className="me-md-2">
                                Voltar
                            </CButton>
                            <CButton color="primary">Avançar</CButton>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ExpansaoManutenibilidadeGam
