// Gerenciamento de Idioma
let currentLanguage = 'pt'; 

const translations = {
    pt: {
        'select-language': 'Selecione o idioma / Select language:',
        'instructions-title': 'Instruções do Simulador',
        'instruction-1': 'As perguntas baseiam-se em edições anteriores do exame <strong>OCI Foundations Associate (1Z0-1085-25)</strong>.',
        'instruction-2': 'Reserve <strong>60 minutos</strong> sem interrupções para completar as 40 perguntas.',
        'instruction-3': 'Procure um <strong>ambiente tranquilo</strong> e certifique-se de ter uma boa ligação à Internet.',
        'instruction-4': 'Realize a simulação <strong>mais de uma vez</strong> para ganhar confiança e familiarizar-se com a ordem aleatória.',
        'note': 'Nota: A ordem das perguntas e das opções mudará em cada tentativa.',
        'start-button': 'COMEÇAR TESTE',
        'loading': 'Carregando...',
        'question': 'Pergunta',
        'of': 'de',
        'next': 'PRÓXIMO',
        'finish': 'FINALIZAR',
        'results': 'RESULTADOS',
        'passed': '¡TESTE SUPERADO!',
        'failed': 'PONTUAÇÃO INSUFICIENTE',
        'score': 'Pontuação',
        'correct': 'Corretas',
        'new-attempt': 'NOVA TENTATIVA',
        'review-title': 'Revisão de Perguntas',
        'correct-label': 'ACERTO',
        'error-label': 'ERRO'
    },
    en: {
        'select-language': 'Select language / Selecione o idioma:',
        'instructions-title': 'Simulator Instructions',
        'instruction-1': 'The questions are based on previous editions of the <strong>OCI Foundations Associate (1Z0-1085-25)</strong> exam.',
        'instruction-2': 'Set aside <strong>60 minutes</strong> without interruptions to complete the 40 questions.',
        'instruction-3': 'Find a <strong>quiet environment</strong> and ensure you have a good internet connection.',
        'instruction-4': 'Complete the simulation <strong>more than once</strong> to gain confidence and familiarize yourself with the random order.',
        'note': 'Note: The order of questions and options will change with each attempt.',
        'start-button': 'START QUIZ',
        'loading': 'Loading...',
        'question': 'Question',
        'of': 'of',
        'next': 'NEXT',
        'finish': 'FINISH',
        'results': 'RESULTS',
        'passed': 'QUIZ PASSED!',
        'failed': 'INSUFFICIENT SCORE',
        'score': 'Score',
        'correct': 'Correct',
        'new-attempt': 'NEW ATTEMPT',
        'review-title': 'Question Review',
        'correct-label': 'CORRECT',
        'error-label': 'WRONG'
    }
};

const rawQuestionsPT = [
  {
    "q": "O que o Oracle Cloud Advisor ajuda você a fazer?",
    "options": [
      "Corrigir problemas automaticamente",
      "Apenas resoluções de segurança",
      "Apenas gerenciamento de custos",
      "Gerenciamento de custos, desempenho e recomendações de alta disponibilidade"
    ],
    "correct": 3
  },
  {
    "q": "Como as cotas de compartimento (compartment quotas) são aplicadas no Oracle Cloud Infrastructure?",
    "options": [
      "Por compartimento",
      "Por região",
      "Globalmente, em todos os compartimentos",
      "Por tenancy"
    ],
    "correct": 0
  },
  {
    "q": "Qual tipo de carga de trabalho NÃO é otimizado para o Oracle Autonomous Database em Infraestrutura Exadata Compartilhada?",
    "options": [
      "Computação de alto desempenho (HPC)",
      "Cargas de trabalho mistas",
      "Processamento de transações",
      "Data warehousing"
    ],
    "correct": 0
  },
  {
    "q": "Qual serviço de Banco de Dados Autônomo do Oracle Cloud Infrastructure é projetado para criar e implantar aplicativos de baixo código (low-code) rapidamente?",
    "options": [
      "Oracle Autonomous Transaction Processing",
      "Oracle APEX Application Development",
      "Oracle Autonomous JSON Database",
      "Oracle Autonomous Data Warehouse"
    ],
    "correct": 1
  },
  {
    "q": "Qual é o objetivo principal da configuração HeatWave do MySQL Database Service no OCI?",
    "options": [
      "Oferecer uma implantação MySQL sem servidor (serverless)",
      "Fornecer um acelerador de consultas distribuído na memória (in-memory)",
      "Permitir a migração direta de banco de dados do local para o OCI",
      "Garantir alta disponibilidade e tolerância a falhas"
    ],
    "correct": 1
  },
  {
    "q": "Qual NÃO é um componente de uma declaração de política de Gerenciamento de Identidade e Acesso (IAM) no Oracle Cloud Infrastructure?",
    "options": [
      "Localização (Location)",
      "Frequência de backup de dados",
      "Verbo de ação (Action verb)",
      "Tipo de recurso (Resource-type)"
    ],
    "correct": 1
  },
  {
    "q": "Qual afirmação NÃO é verdadeira sobre compartimentos no Oracle Cloud Infrastructure?",
    "options": [
      "Compartimentos podem ser aninhados para criar uma hierarquia",
      "Compartimentos são um recurso global",
      "Compartimentos fornecem uma maneira de armazenar e gerenciar chaves de criptografia e segredos",
      "Políticas de IAM podem ser escritas para conceder acesso a recursos em compartimentos específicos"
    ],
    "correct": 2
  },
  {
    "q": "Qual afirmação descreve melhor o comportamento padrão de Autorização (AuthZ) para usuários e grupos no OCI IAM?",
    "options": [
      "O acesso aos recursos é explicitamente concedido em políticas; caso contrário, é negado por padrão",
      "Usuários e grupos recebem automaticamente acesso a todos os recursos",
      "Usuários e grupos devem solicitar acesso para cada recurso",
      "Usuários e grupos recebem acesso com base em funções sem políticas"
    ],
    "correct": 0
  },
  {
    "q": "Qual serviço do OCI NÃO foi projetado para uso com vários provedores de nuvem (multi-cloud)?",
    "options": [
      "MySQL HeatWave Database Service",
      "Oracle Roving Edge Infrastructure",
      "Oracle Interconnect for Azure",
      "Oracle Database@Azure"
    ],
    "correct": 1
  },
  {
    "q": "Qual oferta do OCI permite que você execute serviços de nuvem em seu próprio data center, mantendo a conformidade regulatória?",
    "options": [
      "Oracle Database Service for Azure",
      "Oracle Database@Azure",
      "OCI Dedicated Region",
      "MySQL HeatWave Database Service"
    ],
    "correct": 2
  },
  {
    "q": "Qual serviço do OCI é responsável por armazenar e gerenciar com segurança chaves de criptografia e segredos?",
    "options": [
      "Vault",
      "Cloud Guard",
      "Security Advisor",
      "Security Zones"
    ],
    "correct": 0
  },
  {
    "q": "Onde são realizadas as operações criptográficas para uma Chave de Criptografia Mestra do Vault protegida por um HSM?",
    "options": [
      "No cliente",
      "No HSM",
      "Na nuvem",
      "No servidor"
    ],
    "correct": 1
  },
  {
    "q": "Qual é a vantagem de armazenar segredos em um vault do OCI?",
    "options": [
      "Elimina a necessidade de tokens de autenticação",
      "Gera novos segredos automaticamente",
      "Oferece maior segurança do que armazená-los em código ou arquivos de configuração",
      "Torna os segredos mais fáceis de acessar no código"
    ],
    "correct": 2
  },
  {
    "q": "Qual recurso NÃO é fornecido pelas OCI Security Zones?",
    "options": [
      "Armazenar e gerenciar chaves de criptografia e segredos",
      "Monitoramento contínuo da postura de segurança",
      "Restringir a criação de recursos com base em políticas de segurança predefinidas",
      "Impor automaticamente as melhores práticas de segurança"
    ],
    "correct": 0
  },
  {
    "q": "Qual nível de armazenamento do OCI Object Storage é adequado para dados que precisam ser acessados de forma rápida e frequente?",
    "options": [
      "Archive Storage",
      "Auto-Tiering",
      "Standard Storage",
      "Infrequent Access Storage"
    ],
    "correct": 2
  },
  {
    "q": "No serviço OCI Block Volume, qual recurso permite aumentar o tamanho de um volume de bloco sem qualquer tempo de inatividade?",
    "options": [
      "Volume Elasticity",
      "Dynamic Volume Resizing",
      "Online Resizing",
      "Volume Bursting"
    ],
    "correct": 2
  },
  {
    "q": "Qual nível de desempenho NÃO está disponível no serviço OCI Block Volume?",
    "options": [
      "Higher Performance",
      "Ultra High Performance",
      "Low Performance",
      "Balanced"
    ],
    "correct": 2
  },
  {
    "q": "Qual é o objetivo principal do Auto-Tiering no OCI Object Storage?",
    "options": [
      "Reduzir custos de armazenamento movendo objetos entre níveis",
      "Fornecer análises em tempo real",
      "Remover taxas de armazenamento para objetos grandes",
      "Permitir padrões de acesso ilimitados"
    ],
    "correct": 0
  },
  {
    "q": "Qual carga de trabalho NÃO é adequada para o serviço OCI File Storage?",
    "options": [
      "Big data e analytics",
      "Processamento de mídia",
      "Gerenciamento de conteúdo",
      "Executar pequenos sites pessoais"
    ],
    "correct": 3
  },
  {
    "q": "Qual recurso permite o movimento automático de objetos entre níveis de armazenamento?",
    "options": [
      "Cross-Region Replication",
      "Object Versioning",
      "Pre-Authenticated Requests",
      "Object Lifecycle Management"
    ],
    "correct": 3
  },
  {
    "q": "Qual nível de Object Storage é projetado para dados raramente acessados e restaurados em poucas horas?",
    "options": [
      "Intelligent Tiering",
      "Standard Storage",
      "One Zone-Infrequent Access",
      "Archive Storage"
    ],
    "correct": 3
  },
  {
    "q": "Qual é o objetivo principal dos domínios de falha (fault domains) no OCI?",
    "options": [
      "Lidar com a criptografia de tráfego",
      "Garantir que todas as instâncias estejam no mesmo hardware",
      "Distribuir instâncias por diferentes hardwares físicos",
      "Conectar domínios de disponibilidade"
    ],
    "correct": 2
  },
  {
    "q": "O que é um domínio de disponibilidade (availability domain) no OCI?",
    "options": [
      "Um conjunto de VCNs",
      "Um tipo de tráfego criptografado",
      "Uma área geográfica localizada",
      "Um ou mais data centers dentro de uma região"
    ],
    "correct": 3
  },
  {
    "q": "Por que os domínios de disponibilidade são conectados por redes de baixa latência e alta largura de banda?",
    "options": [
      "Para reduzir as necessidades de criptografia",
      "Para aumentar falhas simultâneas",
      "Para garantir infraestrutura compartilhada",
      "Para permitir alta disponibilidade e replicação"
    ],
    "correct": 3
  },
  {
    "q": "No OCI, quem é responsável por proteger as cargas de trabalho e configurar os recursos?",
    "options": [
      "Tanto a Oracle quanto o cliente",
      "Apenas a Oracle",
      "Provedores terceirizados",
      "Apenas o cliente"
    ],
    "correct": 0
  },
  {
    "q": "O que o modelo de preços Universal Credits permite que os clientes façam?",
    "options": [
      "Pagar um preço fixo para todos os serviços",
      "Usar créditos pré-pagos para serviços de nuvem qualificados",
      "Pagar apenas sem compromisso",
      "Receber recursos fixos por um preço"
    ],
    "correct": 1
  },
  {
    "q": "Qual fator NÃO afeta o custo de execução de uma VM no OCI?",
    "options": [
      "A região usada pela instância da VM",
      "Número de VMs em execução",
      "Tamanho da VM",
      "Sistema operacional"
    ],
    "correct": 0
  },
  {
    "q": "Qual política de balanceamento de carga é suportada pelo OCI Load Balancer?",
    "options": [
      "Weighted Round Robin",
      "Round Robin",
      "Weighted Least Connection",
      "Random"
    ],
    "correct": 0
  },
  {
    "q": "Qual é a função primária de uma Tabela de Roteamento (Route Table) no OCI Networking?",
    "options": [
      "Roteiar o tráfego de sub-redes para destinos fora da VCN",
      "Conectar uma VCN à internet",
      "Fornecer conectividade local privada (on-premise)",
      "Controlar o tráfego entre sub-redes"
    ],
    "correct": 0
  },
  {
    "q": "Qual é o propósito principal de um Grupo de Segurança de Rede (NSG)?",
    "options": [
      "Controlar o roteamento entre VCNs",
      "Fornecer conectividade privada",
      "Controlar o tráfego entre recursos específicos",
      "Conectar-se à internet pública"
    ],
    "correct": 2
  },
  {
    "q": "Qual componente fornece acesso de saída à internet para sub-redes privadas?",
    "options": [
      "Service Gateway",
      "Dynamic Routing Gateway",
      "Internet Gateway",
      "NAT Gateway"
    ],
    "correct": 3
  },
  {
    "q": "Qual componente fornece conectividade privada entre uma VCN e uma rede local (on-premise)?",
    "options": [
      "Service Gateway",
      "Dynamic Routing Gateway",
      "NAT Gateway",
      "Internet Gateway"
    ],
    "correct": 1
  },
  {
    "q": "Qual componente permite acesso aos serviços do OCI sem usar a internet pública?",
    "options": [
      "NAT Gateway",
      "Service Gateway",
      "DRG",
      "Internet Gateway"
    ],
    "correct": 1
  },
  {
    "q": "Qual NÃO é um caso de uso adequado para OCI Container Instances?",
    "options": [
      "Executar APIs e aplicativos da web",
      "Executar trabalhos de processamento de dados e mídia",
      "Executar aplicativos em contêineres no Kubernetes",
      "Realizar operações de nuvem automatizadas"
    ],
    "correct": 2
  },
  {
    "q": "Qual recurso de Computação garante alta disponibilidade de aplicativos?",
    "options": [
      "Fault Domains",
      "Data Guard",
      "GoldenGate",
      "RAC"
    ],
    "correct": 0
  },
  {
    "q": "Qual é um recurso fundamental do OCI Functions?",
    "options": [
      "Limitado a Java",
      "Provisionamento de computação manual",
      "Correção e atualizações automáticas do sistema operacional",
      "Administração extensiva de infraestrutura"
    ],
    "correct": 2
  },
  {
    "q": "Qual é a principal vantagem dos nós virtuais (virtual nodes) no OKE?",
    "options": [
      "Atualizações manuais do plano de dados",
      "Usável apenas em clusters básicos",
      "Kubernetes sem servidor com sobrecarga reduzida",
      "Mais flexibilidade do que nós gerenciados"
    ],
    "correct": 2
  },
  {
    "q": "Qual é o propósito principal do OCI Functions?",
    "options": [
      "Serviço de banco de dados gerenciado",
      "Gerenciamento de máquinas virtuais",
      "Armazenamento de arquivos",
      "Executar código em resposta a eventos ou solicitações HTTP"
    ],
    "correct": 3
  },
  {
    "q": "Qual NÃO é um tipo de instância de Computação?",
    "options": [
      "Bare Metal",
      "Virtual Machine",
      "Dedicated VM Host",
      "Instância Nano"
    ],
    "correct": 3
  },
  {
    "q": "Por que escolher contêineres em vez de máquinas virtuais?",
    "options": [
      "Alocação de recursos menos flexível",
      "Melhor isolamento do que VMs",
      "Inicialização mais rápida e uso de recursos mais eficiente",
      "Requerem mais recursos"
    ],
    "correct": 2
  },
  {
    "q": "No OCI Networking, qual é a função de um Gateway de Roteamento Dinâmico (DRG)?",
    "options": [
      "Fornecer um caminho para o tráfego entre uma VCN e a internet pública",
      "Aplicar regras de segurança em um grupo de recursos de nuvem",
      "Distribuir o tráfego de entrada para recursos de back-end",
      "Fornecer um caminho para o tráfego entre uma VCN e uma rede local ou outra VCN"
    ],
    "correct": 3
  },
  {
    "q": "Qual é a função principal do recurso Auto-Tiering no serviço Object Storage do Cloud Infrastructure?",
    "options": [
      "Eliminar taxas de armazenamento para todos os objetos",
      "Reduzir custos de armazenamento movendo automaticamente objetos entre os níveis Standard e Archive",
      "Reduzir custos de armazenamento movendo automaticamente objetos entre os níveis Standard e Infrequent",
      "Fornecer análises de uso em tempo real para todos os objetos no bucket"
    ],
    "correct": 1
  },
  {
    "q": "Qual é a principal vantagem do dimensionamento vertical (vertical scaling) no serviço Oracle Cloud Infrastructure Compute?",
    "options": [
      "Aumento da tolerância a falhas",
      "Desempenho aprimorado com mais OCPUs e memória",
      "Redução da latência da rede",
      "Melhoria do balanceamento de carga"
    ],
    "correct": 1
  },
  {
    "q": "Qual é o objetivo principal de configurar orçamentos (budgets) no Oracle Cloud Infrastructure?",
    "options": [
      "Monitorar e controlar os gastos com serviços do OCI",
      "Configurar contas de faturamento para clientes do OCI",
      "Pausar automaticamente os serviços do OCI quando os gastos atingirem um determinado limite",
      "Alocar recursos entre compartimentos"
    ],
    "correct": 0
  },
  {
    "q": "Qual serviço do Oracle Cloud Infrastructure não foi projetado para uso com vários provedores de nuvem?",
    "options": [
      "Oracle Database@Azure",
      "MySQL HeatWave Database Service",
      "Oracle Interconnect for Azure",
      "Oracle Roving Edge Infrastructure"
    ],
    "correct": 3
  },
  {
    "q": "Como o recurso Bring Your Own License (BYOL) do Oracle Cloud Infrastructure ajuda os clientes a economizar custos?",
    "options": [
      "Fornecendo descontos em novas licenças de software adquiridas para o OCI",
      "Oferecendo licenças de software gratuitas para determinados serviços do OCI",
      "Permitindo que os clientes usem licenças de software existentes no OCI",
      "Agrupando licenças de software com serviços do OCI a uma taxa com desconto"
    ],
    "correct": 2
  },
  {
    "q": "No serviço Oracle Cloud Infrastructure Compute, qual recurso permite que os usuários migrem instâncias em execução entre diferentes servidores físicos?",
    "options": [
      "Instance evacuation",
      "Live Migration",
      "Instance Migration",
      "Fault Domain Balancing"
    ],
    "correct": 1
  },
  {
    "q": "No Oracle Cloud Infrastructure, qual é a principal diferença entre um Load Balancer e um Network Load Balancer?",
    "options": [
      "Um Load Balancer funciona na camada de aplicação (camada 7), enquanto um Network Load Balancer funciona na camada de transporte (camada 4)",
      "Um Load Balancer é usado para redes privadas, enquanto um Network Load Balancer é usado para redes públicas",
      "Um Load Balancer suporta apenas endereços IPv4, enquanto um Network Load Balancer suporta endereços IPv4 e IPv6",
      "Um Load Balancer funciona na camada de transporte (camada 4), enquanto um Network Load Balancer funciona na camada de aplicação (camada 7)"
    ],
    "correct": 0
  },
  {
    "q": "Por que é importante escolher uma região do OCI próxima aos seus usuários?",
    "options": [
      "Para minimizar a latência e melhorar o desempenho do aplicativo",
      "Para garantir que apenas um Domínio de Disponibilidade seja usado",
      "Para reduzir o custo do armazenamento em nuvem",
      "Para permitir o dimensionamento automático de recursos"
    ],
    "correct": 0
  },
  {
    "q": "Qual ferramenta do Oracle Cloud Infrastructure permite visualizar e analisar seus padrões de uso e gastos na nuvem ao longo do tempo?",
    "options": [
      "Budgets",
      "Quotas",
      "Usage Reports",
      "Cost Analysis"
    ],
    "correct": 3
  },
  {
    "q": "Qual é o termo usado para descrever a combinação da forma (shape), imagem base e metadados de uma instância no serviço Oracle Cloud Infrastructure Compute?",
    "options": [
      "Perfil de Instância",
      "Configuração de Instância (Instance Configuration)",
      "Modelo de Instância",
      "Especificação de Instância"
    ],
    "correct": 1
  },
  {
    "q": "Qual NÃO é um componente de uma declaração de política de IAM no Oracle Cloud Infrastructure?",
    "options": [
      "Verbo de Ação",
      "Tipo de recurso",
      "Criptografia",
      "Localização"
    ],
    "correct": 2
  },
  {
    "q": "No Oracle Cloud Infrastructure, qual componente é responsável por controlar o tráfego entre sub-redes dentro de uma rede virtual na nuvem (VCN)?",
    "options": [
      "Grupos de Segurança de Rede (NSG)",
      "Listas de Segurança (Security Lists)",
      "Gateways de Internet",
      "Tabelas de Roteamento"
    ],
    "correct": 1
  },
  {
    "q": "Qual recurso de segurança impede que os usuários façam alterações de risco ou não conformes nos recursos do OCI?",
    "options": [
      "OCI Cloud Guard",
      "OCI Security Zones",
      "OCI Object Storage Lifecycle Policy",
      "OCI Load Balancer"
    ],
    "correct": 1
  },
  {
    "q": "Qual tipo de armazenamento está associado às instâncias no serviço Oracle Cloud Infrastructure Compute?",
    "options": [
      "Object Storage",
      "Block Storage",
      "Archive Storage",
      "Infrequent Access Storage"
    ],
    "correct": 1
  },
  {
    "q": "Qual é a função de um Grupo Dinâmico (Dynamic Group) no OCI IAM?",
    "options": [
      "Um grupo que impõe autenticação de dois fatores para ambientes de alta segurança",
      "Um grupo que permite que políticas sejam atribuídas a instâncias de computação e outros recursos do OCI, em vez de usuários",
      "Um grupo que armazena logs de auditoria para eventos de segurança do IAM",
      "Um grupo de usuários que recebe automaticamente privilégios de administrador"
    ],
    "correct": 1
  },
  {
    "q": "Qual atributo pode ser personalizado ao criar uma instância de forma flexível (flexible shape) do Oracle Cloud Infrastructure Compute?",
    "options": [
      "Sistema operacional e tipo de disco",
      "Número de NICs físicas e número de NICs virtuais",
      "Forma da instância e tamanho da instância",
      "Número de OCPUs e quantidade de memória"
    ],
    "correct": 3
  },
  {
    "q": "Qual serviço do Oracle Cloud Infrastructure foi projetado para proteger seus aplicativos da Web contra vários tipos de ataques maliciosos, como injeção de SQL e cross-site scripting?",
    "options": [
      "Web Application Firewall (WAF)",
      "Security Zones",
      "Vault Service",
      "Cloud Guard"
    ],
    "correct": 0
  },
  {
    "q": "Qual protocolo é usado pelo serviço Oracle Cloud Infrastructure File Storage para acesso a arquivos?",
    "options": [
      "NFS (Network File System)",
      "SMB (Server Message Block)",
      "iSCSI (Internet Small Computer Systems Interface)",
      "FTP (File Transfer Protocol)"
    ],
    "correct": 0
  },
  {
    "q": "Qual é o objetivo principal de distribuir recursos em vários domínios de disponibilidade no Oracle Cloud Infrastructure?",
    "options": [
      "Segregar recursos com base em projeto ou departamento",
      "Aumentar a capacidade de armazenamento de uma região",
      "Melhorar a tolerância a falhas e a alta disponibilidade",
      "Reduzir a latência para usuários em diferentes locais geográficos"
    ],
    "correct": 2
  },
  {
    "q": "Qual afirmação descreve melhor o Autoscaling para OCI Compute?",
    "options": [
      "O Autoscaling obriga você a parar todas as instâncias antes de redimensioná-las",
      "O Autoscaling exige que você crie apenas uma VM em sua implantação",
      "O Autoscaling suporta apenas a redução de recursos, não o aumento",
      "O Autoscaling ajusta automaticamente o número de instâncias em execução com base em métricas definidas"
    ],
    "correct": 3
  },
  {
    "q": "Qual é uma diferença fundamental entre Listas de Segurança (Security Lists) e Grupos de Segurança de Rede (NSG) no Oracle Cloud Infrastructure?",
    "options": [
      "As Listas de Segurança têm estado (stateful), enquanto os Grupos de Segurança de Rede não têm estado (stateless)",
      "As Listas de Segurança se aplicam a sub-redes, enquanto os Grupos de Segurança de Rede se aplicam a VNICs de instâncias individuais",
      "As Listas de Segurança suportam apenas regras de entrada, enquanto os Grupos de Segurança de Rede suportam regras de entrada e saída",
      "As Listas de Segurança criptografam dados em trânsito, enquanto os Grupos de Segurança de Rede não"
    ],
    "correct": 1
  },
  {
    "q": "Qual tipo de dimensionamento (scaling) é alcançado ao adicionar ou remover instâncias dentro de um pool de instâncias no Oracle Cloud Infrastructure Compute?",
    "options": [
      "Dimensionamento Horizontal",
      "Dimensionamento Vertical",
      "Dimensionamento Diagonal",
      "Dimensionamento Proporcional"
    ],
    "correct": 0
  },
  {
    "q": "Qual serviço do Oracle Cloud Infrastructure monitora continuamente seus recursos e configurações para detectar, avaliar e remediar riscos de segurança?",
    "options": [
      "Cloud Guard",
      "Security Zones",
      "Security Advisor",
      "Vault Service"
    ],
    "correct": 0
  },
  {
    "q": "Qual é uma característica fundamental de um Volume de Bloco do Oracle Cloud Infrastructure?",
    "options": [
      "É efêmero e excluído quando a instância associada é terminada",
      "É replicado automaticamente dentro de um domínio de disponibilidade para alta durabilidade",
      "É um sistema de arquivos compartilhado projetado para alto desempenho",
      "É usado para armazenar e gerenciar dados de objetos"
    ],
    "correct": 1
  },
  {
    "q": "Qual tipo de transferência de dados geralmente é gratuito no Oracle Cloud Infrastructure?",
    "options": [
      "Transferência de dados de entrada (ingress)",
      "Transferência de dados de saída (egress) para AWS ou GCP",
      "Transferência de dados de saída para uma região diferente do OCI",
      "Transferência de dados de saída para a Internet"
    ],
    "correct": 0
  },
  {
    "q": "No Oracle Cloud Infrastructure, qual componente de uma declaração de política de IAM define o usuário ou grupo ao qual a política se aplica?",
    "options": [
      "Principal",
      "Ação (Action)",
      "Recurso (Resource)",
      "Efeito (Effect)"
    ],
    "correct": 0
  },
  {
    "q": "Qual é o principal benefício de usar as OCI Security Zones para o gerenciamento de recursos?",
    "options": [
      "Balanceamento de carga entre regiões",
      "Impor configurações de segurança de melhores práticas",
      "Reduzir a latência da rede",
      "Gerenciar políticas de IAM"
    ],
    "correct": 1
  },
  {
    "q": "Qual é o objetivo principal do Data Transfer Service do OCI?",
    "options": [
      "Criptografar backups de banco de dados em Block Volumes",
      "Migrar clusters do Container Engine (OKE) entre regiões",
      "Facilitar a transferência de dados em massa offline para o OCI usando discos ou dispositivos",
      "Criar várias cópias de objetos em diferentes regiões automaticamente"
    ],
    "correct": 2
  },
  {
    "q": "Quantas cópias de dados o OCI normalmente mantém para durabilidade no Object Storage?",
    "options": [
      "Duas cópias em dois domínios de disponibilidade",
      "Apenas uma cópia no mesmo domínio de disponibilidade",
      "Várias cópias armazenadas redundantemente em uma região inteira",
      "Nenhuma cópia redundante armazenada, a menos que o versionamento seja ativado manualmente"
    ],
    "correct": 2
  },
  {
    "q": "Qual tipo de armazenamento do OCI é normalmente conectado localmente a uma instância de computação e oferece IOPS muito altos, mas não é persistente?",
    "options": [
      "File Storage",
      "Block Volume",
      "Object Storage",
      "Local NVMe"
    ],
    "correct": 3
  },
  {
    "q": "Qual serviço de segurança no OCI ajuda a proteger contra ataques de negação de serviço distribuída (DDoS)?",
    "options": [
      "OCI Bastion",
      "OCI Vault",
      "OCI Web Application Firewall",
      "OCI Cloud Guard"
    ],
    "correct": 2
  },
  {
    "q": "Qual é a principal diferença entre uma sub-rede pública e uma sub-rede privada em uma VCN do OCI?",
    "options": [
      "Sub-redes privadas podem ser criadas apenas em uma região separada da VCN",
      "Sub-redes públicas requerem um bloco CIDR /24, enquanto as sub-redes privadas não",
      "Sub-redes públicas permitem que os recursos tenham endereços IP públicos e acesso direto, enquanto as sub-redes privadas não",
      "Sub-redes públicas podem hospedar apenas balanceadores de carga, enquanto as sub-redes privadas hospedam bancos de dados"
    ],
    "correct": 2
  },
  {
    "q": "No OCI, qual é uma razão fundamental para escolher um Network Load Balancer em vez do Load Balancer padrão (HTTP/HTTPS)?",
    "options": [
      "O Network Load Balancer opera na Camada 4, oferecendo menor latência para tráfego TCP e UDP",
      "O Network Load Balancer pode tomar decisões complexas de roteamento na Camada 7",
      "O Network Load Balancer suporta exclusivamente protocolos da web (HTTP/HTTPS)",
      "O Network Load Balancer é usado apenas para tráfego de banco de dados dentro de uma sub-rede privada"
    ],
    "correct": 0
  },
  {
    "q": "Qual é a prática recomendada para administradores de tenancy do OCI?",
    "options": [
      "Sempre impor autenticação de múltiplos fatores (MFA) para maior segurança",
      "Evitar a criação de vários compartimentos para simplificar o gerenciamento de recursos",
      "Permitir que todos os usuários gerenciem políticas sem restrições",
      "Usar a conta de Administrador da Tenancy para todas as operações diárias"
    ],
    "correct": 0
  },
  {
    "q": "O que é um domínio de identidade (identity domain) no OCI?",
    "options": [
      "Um contêiner lógico para gerenciar usuários e grupos",
      "Um serviço de firewall que controla o acesso aos recursos do OCI",
      "Uma sub-rede privada usada para proteger as comunicações de rede",
      "Um data center físico que armazena credenciais de usuário"
    ],
    "correct": 0
  }
];

const rawQuestionsEN = [
  {
    "q": "What does Oracle Cloud Advisor help you with?",
    "options": [
      "Automatically fixing problems",
      "Only security resolutions",
      "Only cost management",
      "Cost management, performance, and high-availability recommendations"
    ],
    "correct": 3
  },
  {
    "q": "How are compartment quotas applied in Oracle Cloud Infrastructure?",
    "options": [
      "On a per-compartment basis",
      "On a per-region basis",
      "Globally, across all compartments",
      "On a per-tenancy basis"
    ],
    "correct": 0
  },
  {
    "q": "Which workload type is NOT optimized for Oracle Autonomous Database on Shared Exadata Infrastructure?",
    "options": [
      "High-performance computing",
      "Mixed workloads",
      "Transaction processing",
      "Data warehousing"
    ],
    "correct": 0
  },
  {
    "q": "Which Oracle Cloud Infrastructure Autonomous Database service is designed for building and deploying low-code applications rapidly?",
    "options": [
      "Oracle Autonomous Transaction Processing",
      "Oracle APEX Application Development",
      "Oracle Autonomous JSON Database",
      "Oracle Autonomous Data Warehouse"
    ],
    "correct": 1
  },
  {
    "q": "What is the primary purpose of the MySQL Database Service HeatWave configuration in OCI?",
    "options": [
      "To offer a serverless MySQL deployment",
      "To provide a distributed in-memory query accelerator",
      "To enable seamless database migration from on-premise to OCI",
      "To ensure high availability and fault tolerance"
    ],
    "correct": 1
  },
  {
    "q": "Which is NOT a component of an Identity and Access Management (IAM) policy statement in Oracle Cloud Infrastructure?",
    "options": [
      "Location",
      "Data backup frequency",
      "Action verb",
      "Resource-type"
    ],
    "correct": 1
  },
  {
    "q": "Which statement is NOT true about compartments in Oracle Cloud Infrastructure?",
    "options": [
      "Compartments can be nested to create a hierarchy",
      "Compartments are a global resource",
      "Compartments provide a way to store and manage encryption keys and secrets",
      "IAM policies can be written to grant access to resources in specific compartments"
    ],
    "correct": 2
  },
  {
    "q": "Which statement best describes the default AuthZ behavior for users and groups in OCI Identity and Access Management?",
    "options": [
      "Access to resources is explicitly granted in policies; otherwise, it is denied by default",
      "Users and groups are automatically granted access to all resources",
      "Users and groups must request access for each resource",
      "Users and groups are granted access based on roles without policies"
    ],
    "correct": 0
  },
    {
    "q": "Which Oracle Cloud Infrastructure (OCI) offering allows you to run cloud services in your own data center while maintaining regulatory compliance?",
    "options": [
      "Oracle Database Service for Azure",
      "Oracle Database@Azure",
      "OCI Dedicated Region",
      "MySQL HeatWave Database Service"
    ],
    "correct": 2
  },
  {
    "q": "Which OCI service is responsible for securely storing and managing encryption keys and secrets?",
    "options": [
      "Vault",
      "Cloud Guard",
      "Security Advisor",
      "Security Zones"
    ],
    "correct": 0
  },
  {
    "q": "Where are cryptographic operations performed for a Vault Master Encryption Key protected by an Hardware Security Module (HSM)?",
    "options": [
      "On the client",
      "On the HSM",
      "On the cloud",
      "On the server"
    ],
    "correct": 1
  },
  {
    "q": "What is the advantage of storing secrets in a vault in Oracle Cloud Infrastructure?",
    "options": [
      "It eliminates the need for authentication tokens",
      "It automatically generates new secrets",
      "It provides greater security than storing them in code or configuration files",
      "It makes secrets easier to access in code"
    ],
    "correct": 2
  },
  {
    "q": "Which feature is NOT provided by Oracle Cloud Infrastructure Security Zones?",
    "options": [
      "Storing and managing encryption keys and secrets",
      "Continuous monitoring of security posture",
      "Restricting resource creation based on predefined security policies",
      "Automatically enforcing security best practices"
    ],
    "correct": 0
  },
  {
    "q": "Which Oracle Cloud Infrastructure Object Storage tier is suitable for data that needs to be accessed quickly and frequently, with a high level of data accessibility and performance?",
    "options": [
      "Archive Storage",
      "Auto-Tiering",
      "Standard Storage",
      "Infrequent Access Storage"
    ],
    "correct": 2
  },
  {
    "q": "In Oracle Cloud Infrastructure Block Volume Service, which feature enables you to increase the size of a block volume without any downtime?",
    "options": [
      "Volume Elasticity",
      "Dynamic Volume Resizing",
      "Online Resizing",
      "Volume Bursting"
    ],
    "correct": 2
  },
  {
    "q": "Which performance level is NOT available in the Oracle Cloud Infrastructure Block Volume service?",
    "options": [
      "Higher Performance",
      "Ultra High Performance",
      "Low Performance",
      "Balanced"
    ],
    "correct": 2
  },
  {
    "q": "What is the main purpose of the Auto-Tiering feature in the Oracle Cloud Infrastructure Object Storage?",
    "options": [
      "Reducing storage costs by moving objects between Standard and Infrequent Access tiers",
      "Providing real-time analytics",
      "Removing storage fees for large objects",
      "Allowing unlimited access patterns"
    ],
    "correct": 0
  },
  {
    "q": "Which type of workload is NOT suitable for using the Oracle Cloud Infrastructure File Storage service?",
    "options": [
      "Big data and analytics",
      "Media processing",
      "Content management",
      "Running small personal websites"
    ],
    "correct": 3
  },
  {
    "q": "Which feature of Oracle Cloud Infrastructure Object Storage Service enables users to automatically move objects between storage tiers based on predefined rules?",
    "options": [
      "Cross-Region Replication",
      "Object Versioning",
      "Pre-Authenticated Requests",
      "Object Lifecycle Management"
    ],
    "correct": 3
  },
  {
    "q": "In Oracle Cloud Infrastructure Object Storage, which storage tier is designed for rarely accessed data that can be restored within hours?",
    "options": [
      "Intelligent Tiering",
      "Standard Storage",
      "One Zone-Infrequent Access",
      "Archive Storage"
    ],
    "correct": 3
  },
  {
    "q": "What is the primary purpose of fault domains in Oracle Cloud Infrastructure?",
    "options": [
      "To handle encryption of traffic",
      "To ensure all instances are on the same hardware",
      "To distribute instances across different physical hardware",
      "To connect availability domains"
    ],
    "correct": 2
  },
  {
    "q": "What is an availability domain in Oracle Cloud Infrastructure?",
    "options": [
      "A set of VCNs",
      "A type of encrypted traffic",
      "A localized geographical area",
      "One or more data centers within a region"
    ],
    "correct": 3
  },
  {
    "q": "Why are availability domains within the same region connected by a low-latency, high-bandwidth networks?",
    "options": [
      "To reduce encryption needs",
      "To increase simultaneous failures",
      "To ensure shared infrastructure",
      "To allow high-availability connectivity and building replicated systems"
    ],
    "correct": 3
  },
  {
    "q": "In Oracle Cloud Infrastructure, who is responsible for securing the workloads and configuring the cloud resources?",
    "options": [
      "Both Oracle and the customer",
      "Only Oracle",
      "Third-party providers",
      "Only the customer"
    ],
    "correct": 0
  },
  {
    "q": "In Oracle Cloud Infrastructure, what does the Universal Credits pricing model allow customers to do?",
    "options": [
      "Pay a fixed price for all services",
      "Use prepaid credits for eligible cloud services",
      "Pay only without commitment",
      "Receive a fixed amount of resources for a price"
    ],
    "correct": 1
  },
  {
    "q": "Which factor does NOT impact the cost of running a Virtual Machine instance in Oracle Cloud Infrastructure?",
    "options": [
      "The region used by the VM instance",
      "The number of virtual machine running",
      "Size of the VM instance",
      "The operating system used by the VM instance"
    ],
    "correct": 0
  },
  {
    "q": "Which type of load balancing policy is supported by Oracle Cloud Infrastructure Load Balancer?",
    "options": [
      "Weighted Round Robin",
      "Round Robin",
      "Weighted Least Connection",
      "Random"
    ],
    "correct": 0
  },
  {
    "q": "What is the primary function of a Route Table in Oracle Cloud Infrastructure Networking?",
    "options": [
      "To define rules to route traffic from subnets to destinations outside the VCN",
      "To connect a VCN to the public internet",
      "To provide private connection between a VCN and an on-premise network",
      "To define controllling traffic between subnets"
    ],
    "correct": 0
  },
  {
    "q": "What is the primary purpose of a Network Security Group (NSG) in Oracle Cloud Infrastructure Networking service?",
    "options": [
      "To control traffic routing between VCNs",
      "To provide private connection between a VCN and an on-premise network",
      "To control traffic between specific resources within a VCN",
      "To connect a VCN to the public internet"
    ],
    "correct": 2
  },
  {
    "q": "Which Networking component of OCI Virtual Cloud Network provides compute instances in a private subnet with outbound internet access?",
    "options": [
      "Service Gateway",
      "Dynamic Routing Gateway (DRG)",
      "Internet Gateway",
      "Network Address Translation (NAT) Gateway"
    ],
    "correct": 3
  },
  {
    "q": "Which component of the Oracle Cloud Infrastructure Networking service provides a private connection between a VCN and an on-premise network?",
    "options": [
      "Service Gateway",
      "Dynamic Routing Gateway (DRG)",
      "Network Address Translation (NAT) Gateway",
      "Internet Gateway"
    ],
    "correct": 1
  },
  {
    "q": "Which component of the Oracle Cloud Infrastructure Networking service allows resources in a VCN to access Oracle Cloud Infrastructure without traversing the public internet?",
    "options": [
      "Network Address Translation (NAT) Gateway",
      "Service Gateway",
      "Dynamic Routing Gateway (DRG)",
      "Internet Gateway"
    ],
    "correct": 1
  },
  {
    "q": "Which of the following is NOT a use case suitable for OCI Container Instances?",
    "options": [
      "Running APIs and web applications",
      "Running data and media processing jobs",
      "Running containerized apps on Kubernetes",
      "Performing automated cloud operations"
    ],
    "correct": 2
  },
  {
    "q": "Which feature does the Oracle Cloud Infrastructure Compute service leverage for ensuring high availability of applications?",
    "options": [
      "Fault Domains",
      "Data Guard",
      "Golden Gate",
      "Real Application Clusters (RAC)"
    ],
    "correct": 0
  },
  {
    "q": "What is a key feature of Oracle Cloud Infrastructure Functions?",
    "options": [
      "It is limited to running only Java applications",
      "It requires manual provisioning of compute resources",
      "It automatically applies operating system software patches and upgrades",
      "It requires extensive infrastructure administration"
    ],
    "correct": 2
  },
  {
    "q": "What is a key advantage of using virtual nodes in Oracle Container Engine for Kubernetes clusters?",
    "options": [
      "They require manual upgrades of the data plane infrastructure",
      "They can only be used in basic clusters",
      "They allow for serverless Kubernetes experience, reducing operational overhead",
      "They offer more configuration flexibility as compared to managed nodes"
    ],
    "correct": 2
  },
  {
    "q": "What is the primary purpose of Oracle Cloud Infrastructure Functions?",
    "options": [
      "To provide a managed database service",
      "To deploy and manage virtual machines",
      "To store and manage files",
      "To execute code in response to events or HTTP requests"
    ],
    "correct": 3
  },
  {
    "q": "Which is NOT a type of Compute instance offered by the Oracle Cloud Infrastructure Compute service?",
    "options": [
      "Bare Metal",
      "Virtual Machine",
      "Dedicated Virtual Machine Host",
      "Nano instance"
    ],
    "correct": 3
  },
  {
    "q": "Why might you choose to use containers instead of virtual machines?",
    "options": [
      "Containers are less flexible in terms of resource allocation",
      "Containers provide better isolation than virtual machines",
      "Containers allow for faster startup times and more efficient resource usage",
      "Containers require more resources to run"
    ],
    "correct": 2
  },
  {
    "q": "In OCI Networking, what is the role of a Dynamic Routing Gateway (DRG)?",
    "options": [
      "To provide a path for traffic between a VCN and public internet",
      "To enforce security rules on a group of cloud resources",
      "To distribute incoming traffic to backend resources",
      "To provide a path for traffic between a VCN and an on-premises network or another VCN"
    ],
    "correct": 3
  },
  {
    "q": "What is the primary function of the Auto-Tiering feature in the Cloud Infrastructure Object Storage service?",
    "options": [
      "Eliminating storage fees for all objects",
      "Reducing storage costs by automatically moving objects between Standard and Archive tiers",
      "Reducing storage costs by automatically moving objects between Standard and Infrequent tiers",
      "Providing real-time usage analytics for all objects in the bucket"
    ],
    "correct": 2
  },
  {
    "q": "What is the main advantage of vertical scaling in the Oracle Cloud Infrastructure Compute service?",
    "options": [
      "Increased fault tolerance",
      "Enhanced performance with more OCPUs and memory",
      "Reduced network latency",
      "Improved load balancing"
    ],
    "correct": 1
  },
  {
    "q": "What is the primary purpose of setting up budgets in Oracle Cloud Infrastructure?",
    "options": [
      "To monitor and control spending on OCI services",
      "To set up billing accounts for OCI customers",
      "To automatically pause OCI services when spending reaches a certain threshold",
      "To allocate resources across compartments"
    ],
    "correct": 0
  },
  {
    "q": "Which Oracle Cloud Infrastructure service is not designed for use with multiple cloud providers?",
    "options": [
      "Oracle Database@Azure",
      "MySQL HeatWave Database Service",
      "Oracle Interconnect for Azure",
      "Oracle Roving Edge Infrastructure"
    ],
    "correct": 3
  },
  {
    "q": "How does Oracle Cloud Infrastructure's Bring Your Own License (BYOL) feature help customers save on costs?",
    "options": [
      "By providing discounts on new software licenses purchased for OCI",
      "By offering free software licenses for certain OCI services",
      "By allowing customers to use existing software licenses in OCI",
      "By bundling software licenses with OCI services at a discounted rate"
    ],
    "correct": 2
  },
  {
    "q": "In the Oracle Cloud Infrastructure Compute service, which feature enables users to migrate running instances between different physical servers?",
    "options": [
      "Instance evacuation",
      "Live Migration",
      "Instance Migration",
      "Fault Domain Balancing"
    ],
    "correct": 1
  },
  {
    "q": "In Oracle Cloud Infrastructure, what is the main difference between a Load Balancer and a Network Load Balancer?",
    "options": [
      "A Load Balancer works at the application layer (layer 7), whereas a Network Load Balancer works at the transport layer (layer 4)",
      "A Load Balancer is used for private networks, whereas a Network Load Balancer is used for public networks",
      "A Load Balancer supports only IPv4 addresses, whereas a Network Load Balancer supports both IPv4 and IPv6 addresses",
      "A Load Balancer works at the transport layer (layer 4), whereas a Network Load Balancer works at the application layer (layer 7)"
    ],
    "correct": 0
  },
  {
    "q": "Why is it important to choose an OCI Region close to your users?",
    "options": [
      "To minimize latency and improve application performance",
      "To ensure that only one Availability Domain is used",
      "To reduce the cost of cloud storage",
      "To enable automatic resource scaling"
    ],
    "correct": 0
  },
  {
    "q": "Which Oracle Cloud Infrastructure tool allows you to visualize and analyze your cloud usage and spending patterns over time?",
    "options": [
      "Budgets",
      "Quotas",
      "Usage Reports",
      "Cost Analysis"
    ],
    "correct": 3
  },
  {
    "q": "What is the term used to describe the combination of an instance's shape, base image, and metadata in the Oracle Cloud Infrastructure Compute service?",
    "options": [
      "Instance Profile",
      "Instance Configuration",
      "Instance Template",
      "Instance Specification"
    ],
    "correct": 1
  },
  {
    "q": "Which is NOT a component of an IAM policy statement in Oracle Cloud Infrastructure?",
    "options": [
      "Action Verb",
      "Resource-type",
      "Encryption",
      "Location"
    ],
    "correct": 2
  },
  {
    "q": "In Oracle Cloud Infrastructure, which component is responsible for controlling traffic between subnets within a virtual cloud network (VCN)?",
    "options": [
      "Network Security Groups",
      "Security Lists",
      "Internet Gateways",
      "Route Tables"
    ],
    "correct": 1
  },
  {
    "q": "Which security feature prevents users from making risky or non-compliant changes to OCI resources?",
    "options": [
      "OCI Cloud Guard",
      "OCI Security Zones",
      "OCI Object Storage Lifecycle Policy",
      "OCI Load Balancer"
    ],
    "correct": 1
  },
  {
    "q": "What type of storage is associated with instances in the Oracle Cloud Infrastructure Compute service?",
    "options": [
      "Object Storage",
      "Block Storage",
      "Archive Storage",
      "Infrequent Access Storage"
    ],
    "correct": 1
  },
  {
    "q": "What is the function of a Dynamic Group in OCI IAM?",
    "options": [
      "A group that enforces two-factor authentication for high-security environments",
      "A group that allows policies to be assigned to compute instances and other OCI resources, instead of users",
      "A group that stores audit logs for IAM security events",
      "A group of users that automatically receives administrator privileges"
    ],
    "correct": 1
  },
  {
    "q": "What attribute can be customized when creating an Oracle Cloud Infrastructure Compute flexible shape instance?",
    "options": [
      "Operating system and disk type",
      "Number of physical NICs and number of virtual NICs",
      "Instance shape and instance size",
      "Number of OCPUs and amount of memory"
    ],
    "correct": 3
  },
  {
    "q": "Which Oracle Cloud Infrastructure service is designed to protect your web applications from various types of malicious attacks, such as SQL injection and cross-site scripting?",
    "options": [
      "Web Application Firewall (WAF)",
      "Security Zones",
      "Vault Service",
      "Cloud Guard"
    ],
    "correct": 0
  },
  {
    "q": "Which protocol is used by the Oracle Cloud Infrastructure File Storage service for file access?",
    "options": [
      "NFS (Network File System)",
      "SMB (Server Message Block)",
      "iSCSI (Internet Small Computer Systems Interface)",
      "FTP (File Transfer Protocol)"
    ],
    "correct": 0
  },
  {
    "q": "What is the primary goal of distributing resources across multiple availability domains in Oracle Cloud Infrastructure?",
    "options": [
      "To segregate resources based on project or department",
      "To increase storage capacity for a region",
      "To improve fault tolerance and high availability",
      "To reduce latency for users in different geographic locations"
    ],
    "correct": 2
  },
  {
    "q": "Which statement best describes Autoscaling for OCI Compute?",
    "options": [
      "Autoscaling forces you to stop all instances before resizing them",
      "Autoscaling requires that you create only one VM in your deployment",
      "Autoscaling supports only scaling down resources, not scaling up",
      "Autoscaling automatically adjusts the number of running instances based on defined metrics"
    ],
    "correct": 3
  },
  {
    "q": "Which is a key difference between Security Lists and Network Security Groups in Oracle Cloud Infrastructure?",
    "options": [
      "Security Lists are stateful, whereas Network Security Groups are stateless",
      "Security Lists apply to subnets, whereas Network Security Groups apply to individual instance VNICs",
      "Security Lists support only ingress rules, whereas Network Security Groups support both ingress and egress rules",
      "Security Lists encrypt data in transit, whereas Network Security Groups do not"
    ],
    "correct": 1
  },
  {
    "q": "Which type of scaling is achieved by adding or removing instances within an instance pool in Oracle Cloud Infrastructure Compute?",
    "options": [
      "Horizontal Scaling",
      "Vertical Scaling",
      "Diagonal Scaling",
      "Proportional Scaling"
    ],
    "correct": 0
  },
  {
    "q": "Which Oracle Cloud Infrastructure service continuously monitors your resources and configurations to detect, assess, and remediate security risks?",
    "options": [
      "Cloud Guard",
      "Security Zones",
      "Security Advisor",
      "Vault Service"
    ],
    "correct": 0
  },
  {
    "q": "Which is a key characteristic of an Oracle Cloud Infrastructure Block Volume?",
    "options": [
      "It is ephemeral and deleted when the associated instance is terminated",
      "It is automatically replicated within an availability domain for high durability",
      "It is a shared file system designed for high performance",
      "It is used to store and manage object data"
    ],
    "correct": 1
  },
  {
    "q": "Which data transfer type is generally free of charge in Oracle Cloud Infrastructure?",
    "options": [
      "Ingress data transfer",
      "Egress data transfer to AWS or GCP",
      "Egress data transfer to a different OCI region",
      "Egress data transfer to the Internet"
    ],
    "correct": 0
  },
  {
    "q": "In Oracle Cloud Infrastructure, which component of an IAM policy statement defines the user or group the policy applies to?",
    "options": [
      "Principal",
      "Action",
      "Resource",
      "Effect"
    ],
    "correct": 0
  },
  {
    "q": "What is the main benefit of using Oracle Cloud Infrastructure Security Zones for resource management?",
    "options": [
      "Load balancing across regions",
      "Enforcing best practice security configurations",
      "Reducing network latency",
      "Managing IAM policies"
    ],
    "correct": 1
  },
  {
    "q": "What is the main purpose of OCI’s Data Transfer Service?",
    "options": [
      "Encrypting database backups in Block Volumes",
      "Migrating Container Engine (OKE) clusters between regions",
      "Facilitating offline bulk data transfer to OCI using disks or appliances",
      "Creating multiple copies of objects across different regions automatically"
    ],
    "correct": 2
  },
  {
    "q": "How many copies of data does OCI typically maintain for durability in Object Storage?",
    "options": [
      "Two copies across two availability domains",
      "Only one copy in the same availability domain",
      "Multiple copies stored redundantly across an entire region",
      "No redundant copies stored unless versioning is enabled manually"
    ],
    "correct": 2
  },
  {
    "q": "Which type of OCI storage is typically attached locally to a compute instance and offers very high IOPS but is not persistent?",
    "options": [
      "File Storage",
      "Block Volume",
      "Object Storage",
      "Local NVMe"
    ],
    "correct": 3
  },
  {
    "q": "Which security service in OCI helps protect against Distributed Denial-of-Service (DDoS) attacks?",
    "options": [
      "OCI Bastion",
      "OCI Vault",
      "OCI Web Application Firewall",
      "OCI Cloud Guard"
    ],
    "correct": 2
  },
  {
    "q": "What is the primary difference between a public subnet and a private subnet in an OCI VCN?",
    "options": [
      "Private subnets can be created only in a separate region from the VCN",
      "Public subnets require a /24 CIDR block, whereas private subnets do not",
      "Public subnets allow resources to have public IP addresses and direct access, whereas private subnets do not",
      "Public subnets can host only load balancers, whereas private subnets host databases"
    ],
    "correct": 2
  },
  {
    "q": "In OCI, what is one key reason to choose a Network Load Balancer over the Standard Load Balancer (HTTP/HTTPS)?",
    "options": [
      "The Network Load Balancer operates at Layer 4, offering lower latency for TCP and UDP traffic",
      "The Network Load Balancer can perform complex Layer 7 routing decisions",
      "The Network Load Balancer exclusively supports web (HTTP/HTTPS) protocols",
      "The Network Load Balancer is used only for database traffic inside a private subnet"
    ],
    "correct": 0
  },
  {
    "q": "What is the recommended best practice for OCI Tenancy Administrators?",
    "options": [
      "Always enforce Multi-Factor Authentication (MFA) for added security",
      "Avoid creating multiple compartments to simplify resource management",
      "Allow all users to manage policies without restrictions",
      "Use the Tenancy Administrator account for all daily operations"
    ],
    "correct": 0
  },
  {
    "q": "What is an identity domain in OCI?",
    "options": [
      "A logical container for managing users and groups",
      "A firewall service that controls access to OCI resources",
      "A private subnet used for securing network communications",
      "A physical data center that stores user credentials"
    ],
    "correct": 0
  }
];


let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

const PASSING_PERCENT = 68;
const QUESTION_COUNT = 40;
const QUIZ_MINUTES = 60;

let remainingSeconds = 0;
let timerId = null;

function selectLanguage(lang) {
    currentLanguage = lang;
    
    // Atualizar botões de UI
    const btnPT = document.getElementById('btn-lang-pt');
    const btnEN = document.getElementById('btn-lang-en');
    
    if(lang === 'pt') {
        btnPT.className = 'btn btn--primary';
        btnEN.className = 'btn btn--secondary';
    } else {
        btnPT.className = 'btn btn--secondary';
        btnEN.className = 'btn btn--primary';
    }

    // Traduzir textos estáticos
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            // Se for uma instrução (lista), o innerHTML preserva o <strong>
            if(key.startsWith('instruction')) el.innerHTML = t[key];
            else el.innerText = t[key];
        }
    });

    // Atualizar subtítulo manualmente se necessário
    document.getElementById('subtitle').innerText = (lang === 'pt') 
        ? 'Simulador de Exame 1Z0-1085-25' 
        : 'Exam Simulator 1Z0-1085-25';
}

function startQuiz() {
    const rawList = (currentLanguage === 'pt') ? rawQuestionsPT : rawQuestionsEN;
    
    // Clonar, embaralhar e limitar à quantidade desejada
    const shuffled = [...rawList].sort(() => Math.random() - 0.5);
    const limited = shuffled.slice(0, Math.min(QUESTION_COUNT, shuffled.length));
    questions = limited;
    
    // Para cada pergunta, embaralhar as opções mantendo a resposta correta rastreável
    questions = questions.map(qObj => {
        const options = [...qObj.options];
        const correctAnswerText = options[qObj.correct];
        options.sort(() => Math.random() - 0.5);
        const newCorrectIndex = options.indexOf(correctAnswerText);
        return {
            q: qObj.q,
            options: options,
            correct: newCorrectIndex
        };
    });

    currentQuestionIndex = 0;
    userAnswers = [];
    
    document.getElementById('view-intro').classList.add('hide');
    document.getElementById('view-quiz').classList.remove('hide');

    startTimer();
    showQuestion();

    gtag('event', 'start_quiz', {
    event_category: 'quiz',
    event_label: 'OCI Foundations',
    'language': currentLanguage
});
}

function updateTimerDisplay() {
    const el = document.getElementById('quiz-timer');
    if (!el) return;

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    el.innerText = `${mm}:${ss}`;
}

function startTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    remainingSeconds = QUIZ_MINUTES * 60;
    updateTimerDisplay();

    timerId = setInterval(() => {
        remainingSeconds -= 1;
        if (remainingSeconds <= 0) {
            remainingSeconds = 0;
            updateTimerDisplay();
            clearInterval(timerId);
            timerId = null;

            // Se o tempo acabar enquanto o quiz ainda está visível, mostrar resultados
            const quizView = document.getElementById('view-quiz');
            if (quizView && !quizView.classList.contains('hide')) {
                showResults();
            }
            return;
        }

        updateTimerDisplay();
    }, 1000);
}

function showQuestion() {
    const t = translations[currentLanguage];
    const total = questions.length;
    const qObj = questions[currentQuestionIndex];

    // Progreso
    const progressText = document.getElementById('progress-text');
    progressText.innerText = `${t.question} ${currentQuestionIndex + 1} ${t.of} ${total}`;

    const progressFill = document.getElementById('progress-fill');
    const pct = total > 0 ? Math.round(((currentQuestionIndex + 1) / total) * 100) : 0;
    progressFill.style.width = `${pct}%`;

    // Pregunta
    const questionText = document.getElementById('question-text');
    questionText.innerText = qObj?.q ?? t.loading;

    // Opciones
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const selectedIdx = userAnswers[currentQuestionIndex];
    (qObj?.options ?? []).forEach((optText, idx) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.tabIndex = 0;
        optionCard.setAttribute('role', 'button');
        optionCard.dataset.index = String(idx);

        const dot = document.createElement('div');
        dot.className = 'option-dot';

        const label = document.createElement('div');
        label.className = 'option-label';
        label.innerText = optText;

        optionCard.appendChild(dot);
        optionCard.appendChild(label);

        if (selectedIdx === idx) {
            optionCard.classList.add('option-selected');
        }

        optionCard.addEventListener('click', () => selectOption(idx));
        optionCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(idx);
            }
        });

        optionsContainer.appendChild(optionCard);
    });

    renderQuestionMap();

    // Botón siguiente / finalizar
    const btnNext = document.getElementById('btn-next');
    const isLast = currentQuestionIndex === total - 1;
    btnNext.innerText = isLast ? t.finish : t.next;
    btnNext.disabled = userAnswers[currentQuestionIndex] == null;
}

function renderQuestionMap() {
    const container = document.getElementById('question-map');
    if (!container) return;

    container.innerHTML = '';

    const total = questions.length;

    for (let i = 0; i < total; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-question-map-item';

        if (i === currentQuestionIndex) {
            btn.classList.add('quiz-question-map-item--current');
        } else if (userAnswers[i] != null) {
            btn.classList.add('quiz-question-map-item--answered');
        }

        btn.innerText = String(i + 1);
        btn.addEventListener('click', () => {
            currentQuestionIndex = i;
            showQuestion();
        });

        container.appendChild(btn);
    }
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.querySelectorAll('.option-card').forEach((el) => {
        const idx = Number(el.dataset.index);
        if (idx === optionIndex) el.classList.add('option-selected');
        else el.classList.remove('option-selected');
    });

    document.getElementById('btn-next').disabled = false;
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] == null) return;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults(); 
    }
}

function showResults() {
    const t = translations[currentLanguage];
    const total = questions.length;

    let correctCount = 0;
    for (let i = 0; i < total; i++) {
        if (userAnswers[i] === questions[i].correct) correctCount += 1;
    }

    const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const passed = percent >= PASSING_PERCENT;

    // ===== TRACKING GOOGLE ANALYTICS =====
    if (typeof gtag === 'function') {
        gtag('event', 'finish_quiz', {
            event_category: 'quiz',
            score: correctCount,
            total_questions: total,
            percentage: percent,
            passed: passed
        });
    }

    // Detener temporizador se ainda estiver ativo
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    // Cambiar vista
    document.getElementById('view-quiz').classList.add('hide');
    document.getElementById('view-results').classList.remove('hide');

    // Resumen
    const resIcon = document.getElementById('res-icon');
    resIcon.innerText = passed ? '🏆' : '📘';

    const resTitle = document.getElementById('res-title');
    resTitle.innerText = passed ? t.passed : t.failed;

    const resPercent = document.getElementById('res-percent');
    resPercent.innerText = `${percent}%`;
    resPercent.classList.toggle('results-stat-value--fail', !passed);

    const resCount = document.getElementById('res-count');
    resCount.innerText = `${correctCount}/${total}`;

    // Revisión
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    for (let i = 0; i < total; i++) {
        const q = questions[i];
        const userIdx = userAnswers[i];
        const isCorrect = userIdx === q.correct;

        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'review-item--correct' : 'review-item--wrong'}`;

        const label = document.createElement('div');
        label.className = 'review-item-label';
        label.innerText = isCorrect ? t['correct-label'] : t['error-label'];
        item.appendChild(label);

        const question = document.createElement('p');
        question.className = 'review-item-question';
        question.innerText = `${t.question} ${i + 1}: ${q.q}`;
        item.appendChild(question);

        const optionsWrap = document.createElement('div');
        optionsWrap.className = 'review-options';

        q.options.forEach((optText, idx) => {
            const opt = document.createElement('div');
            opt.className = 'review-option';
            opt.innerText = optText;

            if (idx === q.correct) opt.classList.add('review-option--correct');
            if (idx === userIdx && userIdx !== q.correct) opt.classList.add('review-option--wrong');

            optionsWrap.appendChild(opt);
        });

        item.appendChild(optionsWrap);
        reviewList.appendChild(item);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Asegura que los botones de idioma reflejen el estado actual
    selectLanguage(currentLanguage);
});