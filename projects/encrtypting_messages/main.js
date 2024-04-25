
/********************VARIABLES**********************/
let masterTable = [];
let language = "en";
let keyArray = [];
let messagesStack = [];

let messageCollection = {
    maintitle: [
        {message: `Message Encrypter`},
        {message: `Encriptador de mensajes`},
        {message: `Crypteur de Messages`},
        {message: `Encriptador de Mensagens`}
    ],
    instructionstitle:[
        {message: `Instructions`},
        {message: `Instrucciones`},
        {message: `Instructions`},
        {message: `Instruções`}
    ],
    instructionscontent:[
        {message: `<p>1. Select the master table from the options. </p> <p>2. Then enter your keyword and your message.</p> <p> 3. After that, press the button according to the option that you want to do.</p> <p><strong>4. Don't forget the keyword and the master table otherwise you won't be able to decrypt it.</strong></p>`},
        {message: `<p>1. Selecciona la tabla maestra de las opciones. </p><p>2. Luego ingresa tu palabra clave y tu mensaje. </p> <p>3. Después, presiona el botón de acuerdo a la opción que desees. </p><p><strong>4. No olvides la palabra clave y la tabla maestra, de lo contrario no podrás descifrarlo.</strong><p>`},
        {message: `<p>1. Sélectionnez la table principale parmi les options.</p> <p>2. Ensuite, saisissez votre mot-clé et votre message.</p><p>3. Ensuite, appuyez sur le bouton correspondant à l'option que vous souhaitez.</p> <p><strong>4. N'oubliez pas le mot-clé et la table principale, sinon vous ne pourrez pas le déchiffrer.</strong></p>`},
        {message: `<p>1. Selecione a tabela principal das opções.</p> <p>2. Em seguida, insira sua palavra-chave e sua mensagem.</p> <p>3. Depois, pressione o botão de acordo com a opção desejada.</p> <p><strong>4. Não esqueça a palavra-chave e a tabela principal, caso contrário, você não poderá descriptografá-la.</strong></p>`}
    ],
    mastertable:[
        {message: `Select the desired master table.`},
        {message: `Selecciona la tabla maestra deseada.`},
        {message: `Sélectionnez la table maîtresse désirée.`},
        {message: `Selecione a tabela mestra desejada.`}
    ],
    keylabel:[
        {message: `Enter your keyword or key phrase.`},
        {message: `Ingresa tu palabra o frase clave.`},
        {message: `Entrez votre mot-clé ou phrase clé.`},
        {message: `Digite sua palavra-chave ou frase-chave.`}
    ],
    messagelabel:[
        {message: `Enter your message.`},
        {message: `Ingresa tu mensaje.`},
        {message: `Entrez votre message.`},
        {message: `Digite sua mensagem.`}
    ],
    buttonencrypt:[
        {message: `Encrypt`},
        {message: `Encriptar`},
        {message: `Crypter`},
        {message: `Criptografar`}
    ],
    buttondecrypt:[
        {message: `Decrypt`},
        {message: `Desencriptar`},
        {message: `Décrypter`},
        {message: `Descriptografar`}
    ],
    resultTitle: [
        {message: `Result, click below to copy.`},
        {message: `Resultado, clique abajo para copiar.`},
        {message: `Résultat, cliquez ci-dessous pour copier.`},
        {message: `Resultado, clique abaixo para copiar.`}
    ],
    disclaimer: [
        {message: `Disclaimer: The message encryptor may contain minor errors, and its encryption method relies on a basic algorithm using a master table and a secret key. Users are advised to exercise caution when encrypting sensitive information and take necessary measures to safeguard it. Users are strongly reminded to retain and protect their passphrase and the master table used, as no data is stored. The developer is not liable for any misuse or loss of information resulting from the use of this tool.`},
        {message: `Descargo de responsabilidad: El encriptador de mensajes puede contener errores y su método de encriptación se fundamenta en un algoritmo básico que utiliza una tabla maestra y una clave secreta. Se insta al usuario a ejercer precaución al encriptar información sensible y a tomar las medidas necesarias para salvaguardarla. Se recuerda encarecidamente al usuario que retenga y proteja su palabra clave y la tabla maestra utilizada, ya que ningún dato se almacena. El desarrollador no se hace responsable de cualquier mal uso o pérdida de información como resultado del uso de esta herramienta.`},
        {message: `Avis de non-responsabilité : L'encrypteur de messages peut contenir de petites erreurs, et sa méthode de chiffrement repose sur un algorithme de base utilisant une table maîtresse et une clé secrète. Il est recommandé aux utilisateurs de faire preuve de prudence lors du chiffrement d'informations sensibles et de prendre les mesures nécessaires pour les protéger. Les utilisateurs sont fortement invités à conserver et à protéger leur mot de passe et la table maîtresse utilisée, car aucune donnée n'est stockée. Le développeur n'est pas responsable de tout abus ou perte d'informations résultant de l'utilisation de cet outil.`},
        {message: `Aviso Legal: O encriptador de mensagens pode conter pequenos erros, e seu método de criptografia baseia-se em um algoritmo básico que utiliza uma tabela mestra e uma chave secreta. Os usuários são aconselhados a ter cautela ao criptografar informações sensíveis e a tomar as medidas necessárias para protegê-las. Os usuários são fortemente lembrados de manter e proteger sua senha e a tabela mestra usada, pois nenhum dado é armazenado. O desenvolvedor não se responsabiliza por qualquer uso indevido ou perda de informações resultantes do uso desta ferramenta.`}
    ]
}

/**HTML DOM VARIABLES*/
const mainTitleHtml = document.getElementById("maintitle");
const instructionsTitleHtml = document.getElementById("instructionstitle");
const instructionsContentHtml = document.getElementById("instructionscontent");
const masterTableHtml = document.getElementById("mastertable");
const keyLabelHtml = document.getElementById("keylabel");
const keywordHtml = document.getElementById("keyword");
const keywordFeedbackHtml = document.getElementById("keywordfeedback");
const messageLabelHtml = document.getElementById("messagelabel");
const keyMessageHtml = document.getElementById("keymessage");
const keyMessageFeedbackHtml = document.getElementById("keymessagefeedback");
const buttonEncryptHtml = document.getElementById("buttonencrypt");
const buttonDecryptHtml = document.getElementById("buttondecrypt");
const encryptedMessageHtml = document.getElementById("encryptedmessage");
const messageBoxHtml = document.getElementById("messageBar");
const resultTitleHtml = document.getElementById("resulttitle"); 
const disclaimerHtml =  document.getElementById("disclaimer");

console.log(selectMessageLanguage ( messageCollection.maintitle ).message)
changeHtmlDomLanguage( )
/*************************************FUNCTIONS**********************************************/

function selectLanguage( stringResponse ){
    /*Function to select language.
    Require: Existance of global variable language.
    Params: String response. */
    switch ( stringResponse ){
        case "es":
            language = "es";
            break;
        case "fr":
            language = "fr";
            break;
        case "pt":
            language = "pt";
            break;
        default:
            language = "en";
            break;
    }
    changeHtmlDomLanguage( )
}

function changeHtmlDomLanguage( ){
    /*Function to select language.
    Require: Existance of global variable language.
    Params: String response. */
    mainTitleHtml.innerHTML = selectMessageLanguage ( messageCollection.maintitle ).message
    instructionsTitleHtml.innerHTML = selectMessageLanguage ( messageCollection.instructionstitle ).message
    instructionsContentHtml.innerHTML = selectMessageLanguage ( messageCollection.instructionscontent ).message
    masterTableHtml.innerHTML = selectMessageLanguage ( messageCollection.mastertable ).message
    keyLabelHtml.innerHTML = selectMessageLanguage ( messageCollection.keylabel ).message
    messageLabelHtml.innerHTML = selectMessageLanguage ( messageCollection.messagelabel ).message
    buttonEncryptHtml.innerHTML = selectMessageLanguage ( messageCollection.buttonencrypt ).message 
    buttonDecryptHtml.innerHTML = selectMessageLanguage ( messageCollection.buttondecrypt ).message 
    resultTitleHtml.innerHTML = selectMessageLanguage ( messageCollection.resultTitle ).message
    disclaimerHtml.innerHTML = selectMessageLanguage ( messageCollection.disclaimer ).message
}


function selectMessageLanguage ( array ){
    /*Function to select the type of message to display or to select based on language selected.
    Params: Array that contains messages in 4 langauges: 1. Enlglish, 2. Spanish, 3. French, 4. Portuguese*/
    if ( array.length != 4 ){
        optionMessage = [
            {state: false, message: `The messages option array must be equall to 4. First item message in English, 2nd Spanish, 3rd French and 4th Portuguese.`},
            {state: false, message: `El array de opciones de mensajes debe ser igual a 4. El primer mensaje en inglés, el segundo en español, el tercero en francés y el cuarto en portugués.`},
            {state: false, message: `Le tableau d'options de messages doit être égal à 4. Le premier message en anglais, le deuxième en espagnol, le troisième en français et le quatrième en portugais.`},
            {state: false, message: `O array de opções de mensagens deve ser igual a 4. O primeiro item da mensagem em inglês, o segundo em espanhol, o terceiro em francês e o quarto em português.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }
    switch (language){
        case "es":
            return array[1];
        case "fr":
            return array[2];
        case "pt":
            return array[3];
        default:
            return array[0];
    }
    
}

function asingMasterTable( response ){
    /*Function to select the master table for the encrypting decrypting process
    Params: number between 1 and 4.*/
    response = Number( response );
    if ( isNaN(response) || response === " " || response < 1 || response > 4 || response === undefined || response === null){
        optionMessage = [
            {state: false, message: `The selected master table is invalid. It must be a number between 1 and 4.`},
            {state: false, message: `La tabla maestra seleccionada es inválida. Debe ser un número entre 1 y 4.`},
            {state: false, message: `La table principale sélectionnée n'est pas valide. Choisissez un numéro entre 1 et 4.`},
            {state: false, message: `A tabela mestra selecionada não é válida. Escolha um número entre 1 e 4.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }
    switch ( response ){
        case 1:
            masterTable = [ "ý", "»", "š", "Î", "{", "B", "D", "²", "ˆ", "î", "¤", "”", "€", "Õ", "þ", "É", "·", "2", "º", "ü", "A", "n", "¸", "Y", "s", "0", "*", "¹", "á", "ß", "/", "Ü", "z", "k", "Þ", "Ã", "%", "¶", ",", "g", "6", "Ø", "Á", "@", ")", "O", "ƒ", "¥", "™", "õ", "â", "8", "N", "ä", "ç", "Ù", "`", "›", "é", "½", "X", "P", "K", "1", "è", "ò", "Ï", "S", ".", "¢", "È", "H", "“", "ã", "i", "©", "L", "Ž", "ú", "'", "µ", "¨", "¡", "ñ", "Š", "=", "ù", "!", "Ê", "5", "å", "Ó", "-", "[", "’", "\\", "–", "æ", "Ò", ">", "<", "&", "…", "G", "Ö", "§", "Å", "‹", "d", "}", "U", "V", "(", "C", "h", "—", "ì", "ó", "m", "ø", "ð", "\"", "Ñ", "¾", "°", "à", "Ý", "«", "Ë", "]", "Œ", "ž", "œ", "‚", "Ú", "R", "l", "?", "~", ";", "®", "j", "³", "÷", "7", "¯", "c", "í", "w", "­", "Ç", "Q", "W", "J", "r", "ô", "u", "v", "_", "p", "M", "F", "¬", "¦", "3", "b", "Û", "|", "Ì", "9", ":", "y", "¼", "x", "4", "†", "ï", " ", "+", "f", "ë", "˜", "T", "$", "´", "×", "Ð", "o", "Ÿ", "Z", "t", "E", "ª", "ö", "•", "û", "Ô", "Ä", "Í", "q", "ÿ", "„", "À", "#", "Æ", "‘", "Â", "±", "‰", "a", "‡", "^", "e", "£", "I", "ê", "¿" ];
            break;
        case 2:
            masterTable = [ "f", "î", "T", "Ã", "Æ", "6", "Å", "¡", "ü", "¬", "Í", "¢", " ", "Ô", "^", ">", "0", "h", "ä", "Ê", "-", "\"", "[", "Ó", "Ç", "º", "?", "¶", "ë", "<", "B", "·", "å", "Ä", "I", "‹", "à", "a", "2", "Ÿ", "k", "v", "»", "«", "µ", "Ì", ",", "&", "i", "ª", "q", "!", "ã", "³", "K", "Ò", "S", "÷", "ÿ", "‰", "\\", "P", "Y", "…", "ß", "¨", "„", "ð", "ç", "(", "e", "=", "Œ", "J", "í", "F", "Ú", "ó", ";", "×", "•", "–", "©", "¦", "H", "D", "x", "Ý", "´", "ñ", "Q", "Š", "y", "È", "Ñ", "|", "š", "C", "˜", "w", "æ", "Ü", "ú", "]", "Õ", "é", "E", "¤", "ö", "Þ", "‘", "$", "ì", "1", "Ø", "G", "7", "m", "²", "}", "`", "ù", "Û", "þ", "s", "œ", "c", "¸", "â", "Z", "½", "ƒ", "M", "p", "è", "±", "5", "”", "¹", "O", "ø", "u", "8", ")", "¼", "ò", "—", "d", "R", "~", "Ù", "Î", "_", "r", "o", "N", "£", "W", "õ", "®", "­", "3", "ê", "¿", "¾", "Ë", "™", "n", "4", "¯", "X", "ý", "#", "%", "†", "{", ".", "A", "'", "V", "@", "t", "¥", "*", "ˆ", "É", "L", "À", "Ž", "l", "ô", "z", "ï", "°", "Ð", "‡", "§", "/", "ž", "g", ":", "û", "€", "›", "+", "‚", "Ï", "Á", "U", "9", "j", "’", "á", "Â", "b", "Ö", "“" ];
            break;
        case 3:
            masterTable = [ "É", "P", "”", "l", "¨", "Œ", "‘", "m", "7", "\"", "ë", "z", "ƒ", "Š", "\\", "`", "û", "_", "*", "‹", "I", "¢", "¹", "¬", "À", "n", "ü", "×", "9", "‰", "?", "è", "ç", ":", "æ", "¡", "Õ", "†", "q", "ï", ",", "s", "D", "Í", "©", "¥", "f", "6", "Â", "õ", "4", "ù", "+", "È", "—", "a", "(", "á", "²", "B", "K", ")", "Ø", "³", "ä", "}", "ß", "|", "Æ", "º", "E", "Ÿ", "¸", "¦", "=", "j", "í", "o", "Y", "ª", "W", "¿", "h", "°", "ý", "î", "±", "œ", "þ", "/", "Å", "Ê", "Ù", "Z", "¯", "#", "˜", "S", "•", "¾", "k", "]", "´", "ð", "–", "X", "H", "›", "ñ", "ž", "<", "w", " ", "Ç", "J", "Ì", "2", "½", "Ä", "é", "Ï", "ì", "ò", "»", "F", "’", "Þ", "Ô", "5", "ÿ", "£", "y", "Ó", "·", "V", "M", "‡", "%", "Ë", "Ü", "«", "µ", "ã", "â", "U", "ö", "x", "¶", "{", "c", "O", "N", "„", "[", "ô", ">", "ê", "r", "$", "i", "ú", "v", "¼", "ó", "3", "^", "¤", "e", "p", "@", "Û", "R", "Ö", "T", "š", "Î", ";", "1", "Ò", "L", "C", "Ú", ".", "-", "Á", "“", "~", "'", "u", "Ý", "b", "Ã", "÷", "G", "à", "ˆ", "å", "!", "®", "Ž", "Q", "‚", "t", "­", "&", "d", "™", "8", "ø", "A", "€", "Ñ", "…", "0", "§", "Ð", "g" ];
            break;
        case 4:
            masterTable = [ "*", "ý", "À", "Æ", "/", "_", "O", "K", "µ", "é", "E", "§", "Ž", "I", "ô", "H", "%", "Ä", "@", "ü", "v", "f", "`", "³", "¼", "‰", "M", "‡", "×", ",", "à", "ú", "+", "a", "Ú", "=", "¿", "<", "N", "X", "Å", "„", "F", "?", "˜", "÷", "5", "°", "D", "b", "!", "»", "\"", "Â", "#", "›", "€", "Ã", "1", "î", "Ø", "9", "k", "·", ">", "š", "Á", "á", "Ñ", "©", "­", "ò", "ä", "¡", "ƒ", "õ", "R", "Ì", "\\", "‚", "È", "n", "~", "ð", "w", "u", "Ô", "L", "Ç", "ë", "ç", "W", "œ", "-", "B", "[", "q", "²", "ì", "±", "’", "†", "U", "Ü", "º", "p", "¨", "ÿ", "Z", "¤", "•", "Š", "2", "å", ":", "ª", "Ð", "—", "¬", "s", "ñ", "P", "G", "Œ", "t", "Y", "Ù", "|", "i", "^", "S", "ï", "–", "¹", "…", "¶", "¢", "‹", "þ", "T", "ø", "®", "Ê", "C", "ó", "o", "«", "Î", "&", "£", "Ö", "z", "æ", "3", "V", "Í", "ê", "û", "ß", "‘", ";", "e", "{", "Õ", "l", "4", "7", "“", "Ÿ", "J", "(", "r", "'", "Q", "$", "½", "í", "d", "Ï", "Û", "x", "0", "6", "™", "´", "Ó", "Ë", "8", "Þ", "A", "¦", "ö", "y", "g", "è", "¯", "¸", "]", "ˆ", "¥", "”", "¾", "Ò", "É", "ã", " ", "m", "h", "Ý", ".", "}", "ž", "ù", "â", "j", ")", "c" ];
            break;

    }
    optionMessageTwo= [
        {state: true, message: `Table master selected ${response} succesfully.`},
        {state: true, message: `La tabla maestra seleccionada ${response} exitosamente.`},
        {state: true, message: `Tableau maître sélectionné ${response} avec succès.`},
        {state: true, message: `Tabela mestra selecionada ${response} com sucesso.`}
    ]
    ManageMessages(selectMessageLanguage ( optionMessageTwo ));
}


function evaluateValidCaracter( string, verificationType ) {
    /*Function that determines if the message/key entered contains valid characters.
    Params: string with message, verification type that is a number between 1 and 2; 1 to analyze messages and 2 to analyze the key.*/
    verificationType = Number(verificationType);
    switch (verificationType){
        case 1:
            invalidCaracters = []; 
            array = string.split('');
            array.forEach(character => {
                let valid = masterTable.findIndex(item => item === character); 
                if (valid === -1) {
                    invalidCaracters.push(character); 
                }
            });
            optionMessage = [
                {state: false, message: `${invalidCaracters.length} Invalid characters: ${invalidCaracters.join(' - ')}`},
                {state: false, message: `${invalidCaracters.length}  Carácteres inválidos: ${invalidCaracters.join(' - ')}`},
                {state: false, message: `${invalidCaracters.length}  Caractères non valides: ${invalidCaracters.join(' - ')}`},
                {state: false, message: `${invalidCaracters.length} Caracteres inválidos: ${invalidCaracters.join(' - ')}`}
            ]
            htmlbox.innerHTML = selectMessageLanguage ( optionMessage ).message; 
            break;
        case 2:
            let privateInvalidCharacters = []
    
            array = string.split('');
            
            array.forEach(character => {
                let valid = masterTable.findIndex(item => item === character); 
                if (valid === -1) {
                    privateInvalidCharacters.push(character); 
                }
            });
            

            if ( privateInvalidCharacters.length > 0 ){
                optionMessage = [
                    {state: false, message: `Invalid characters, please delete them: ${privateInvalidCharacters.join(' - ')}`},
                    {state: false, message: `Carácteres inválidos, por favor bórrelos: ${privateInvalidCharacters.join(' - ')}`},
                    {state: false, message: `Caractères non valides, veuillez les supprimer : ${privateInvalidCharacters.join(' - ')}`},
                    {state: false, message: `Caracteres inválidos, por favor, exclua-os: ${privateInvalidCharacters.join(' - ')}`}
                ]
                ManageMessages(selectMessageLanguage ( optionMessage ));
                return {state: false, array: array, invalid: privateInvalidCharacters};
            } 
            else{
                return {state: true, array: array, invalid: privateInvalidCharacters};
            }
    }
    
}

function createKey( string ){
    /*Function to create an array with the indexes for the key value
    params: String with value.
    If all characters are ok it asign the array otherwise it prints a message*/
    let validKey = evaluateValidCaracter( string, 2 );
    if (validKey.state){
        keyArray = validKey.array.map(character => masterTable.findIndex(item => item === character));
    }
    
}


function encryptMessage( string ){
    /*Function to encrypt one message
    Params: string with message to encrypt.
    If it has valid characters it encrypt its otherwise it return message.*/
    let validMessage = evaluateValidCaracter( string, 2 );

    if( validMessage.state ){

        originalValidMessage = validMessage.array;
        originalKey = keyArray.map(key => key);
        if ( originalKey.length < 0 ){
            optionMessage = [
                {state: false, message: `The key is empty, please create a key.`},
                {state: false, message: `La llave está vacía, por favor cree una llave.`},
                {state: false, message: `La clé de chiffrement est vide, veuillez en créer une.`},
                {state: false, message: `A chave de criptografia está vazia, por favor, crie uma.`}
            ]
            ManageMessages(selectMessageLanguage ( optionMessage ));
            return false
        } 

        messageIndex = validMessage.array.map(character => masterTable.findIndex(item => item === character));
        console.log(messageIndex)
        let newMessageEncrypted = []
        messageIndex.forEach(
            characterIndex =>{
                if (originalKey.length < 1){
                    originalKey = keyArray.map(key => key);
                }
                let keyIndex = originalKey.shift();
                let encryptedCharacter = calculateEncrypt( characterIndex,keyIndex );
                newMessageEncrypted.push(encryptedCharacter);
            }
        )
        return newMessageEncrypted.join("")
    }
}


function calculateEncrypt( characterIndex,keyIndex ){
    /*Actual function that encrypts the message*/
    let maxIndex = masterTable.length;
    let total = characterIndex + keyIndex;
    if ( total > maxIndex){
        newCharacter = total - maxIndex;
        return masterTable[newCharacter];
    } else {
        return masterTable[total];
    }
}

function decryptMessage( string ){
    /*Function to decrypt one message
    Params: string with message to encrypt.
    If it has valid characters it encrypt its otherwise it return message.*/
    let validMessage = evaluateValidCaracter( string, 2 );

    if( validMessage.state ){

        originalValidMessage = validMessage.array;
        originalKey = keyArray.map(key => key);

        if ( originalKey.length < 0 ){
            optionMessage = [
                {state: false, message: `The key is empty, please create a key.`},
                {state: false, message: `La llave está vacía, por favor cree una llave.`},
                {state: false, message: `La clé de chiffrement est vide, veuillez en créer une.`},
                {state: false, message: `A chave de criptografia está vazia, por favor, crie uma.`}
            ]
            return false
        } 

        messageIndex = validMessage.array.map(character => masterTable.findIndex(item => item === character));
        console.log(validMessage.array)
        console.log(messageIndex)
        let newMessageDecrypted = []
        messageIndex.forEach(
            characterIndex =>{
                if (originalKey.length < 1){
                    originalKey = keyArray.map(key => key);
                }
                let keyIndex = originalKey.shift();
                let encryptedCharacter = calculateDecrypt( characterIndex,keyIndex );
                newMessageDecrypted.push(encryptedCharacter);
            }
        )
        return(newMessageDecrypted)  
    }
}


function calculateDecrypt(characterIndex, keyIndex) {
    /*Actual function that decrypts the message*/
    let maxIndex = masterTable.length;
    let total = characterIndex - keyIndex;
    if (total < 0) {
        let newCharacter = maxIndex + total;
        return masterTable[newCharacter];
    } else {
        return masterTable[total];
    }
}

function ManageMessages(message) {
    /*Function to handle the messages*/
    // We add the message to the messages stack
    messagesStack.unshift(message);

    // We clean the HTML messages item
    messageBoxHtml.innerHTML = "";

    // We iterate the messages stack and create and append one p element
    
    messagesStack.forEach(messageOfStack => {
        const individualMessage = document.createElement('p');
        individualMessage.classList.add(messageOfStack.state);
        individualMessage.innerHTML = `${messageOfStack.message}`;
        messageBoxHtml.appendChild(individualMessage);
    });

    setTimeout(function () {
        messagesStack.pop();
        messageBoxHtml.lastElementChild.remove()
    }, 5000);
}

keywordHtml.addEventListener("input"||"keydown", function(){
    /*Event listener so it evaluates everything that is written and advise if it contains invalid characters.
    This one if for the keyword space*/
    htmlbox = keywordFeedbackHtml
    evaluateValidCaracter( keywordHtml.value, 1 )
})

keyMessageHtml.addEventListener("input"||"keydown", function(){
    /*Event listener so it evaluates everything that is written and advise if it contains invalid characters.
    This one if for the message space*/
    htmlbox = keyMessageFeedbackHtml
    evaluateValidCaracter( keyMessageHtml.value, 1 )
})

buttonEncryptHtml.addEventListener("click", function(){
    /*Event listener so it encrypt the message, it evaluates several condition to assure all it is completed.*/
    finalKey = keywordHtml.value;
    finalMessage = keyMessageHtml.value;
    let validFinalKey = evaluateValidCaracter( finalKey, 2 );
    let validFinalMessage = evaluateValidCaracter( finalMessage, 2 );

    if ( masterTable === " " || masterTable.length < 1 || masterTable === undefined || masterTable === null){
        optionMessage = [
            {state: false, message: `Master table not selected. Please select one.`},
            {state: false, message: `Tabla maestra no seleccionada. Por favor seleccione una.`},
            {state: false, message: `Tableau principal non sélectionné. Veuillez en sélectionner un.`},
            {state: false, message: `Tabela mestre não selecionada. Por favor selecione uma.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }

    if ( finalKey.length < 1 ){
        optionMessage = [
            {state: false, message: `The key is empty, please create a key.`},
            {state: false, message: `La llave está vacía, por favor cree una llave.`},
            {state: false, message: `La clé de chiffrement est vide, veuillez en créer une.`},
            {state: false, message: `A chave de criptografia está vazia, por favor, crie uma.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false
    } 

    if ( finalMessage.length < 1 ){
        optionMessage = [
            {state: false, message: `The message is empty, please create a message.`},
            {state: false, message: `El mensaje está vacío, por favor cree uno.`},
            {state: false, message: `Le message est vide, veuillez en créer une.`},
            {state: false, message: `A mensagem está vazia, por favor, crie uma.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false
    } 

    if ( validFinalKey.state === false ){
        optionMessage = [
            {state: false, message: `Key has invalid characters, please delete them: ${validFinalKey.invalid.join(' - ')}`},
            {state: false, message: `La clave tiene carácteres inválidos, por favor bórrelos: ${validFinalKey.invalid.join(' - ')}`},
            {state: false, message: `La clé de chiffrement a des caractères non valides, veuillez les supprimer : ${validFinalKey.invalid.join(' - ')}`},
            {state: false, message: `A chave de criptografia têm Caracteres inválidos, por favor, exclua-os: ${validFinalKey.invalid.join(' - ')}`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }

    if ( validFinalMessage.state === false ){
        optionMessage = [
            {state: false, message: `Message has invalid characters, please delete them: ${validFinalMessage.invalid.join(' - ')}`},
            {state: false, message: `El mensaje tiene carácteres inválidos, por favor bórrelos: ${validFinalMessage.invalid.join(' - ')}`},
            {state: false, message: `Le message a des caractères non valides, veuillez les supprimer : ${validFinalMessage.invalid.join(' - ')}`},
            {state: false, message: `A mensagem têm Caracteres inválidos, por favor, exclua-os: ${validFinalMessage.invalid.join(' - ')}`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }

    createKey( keywordHtml.value );
    finalEncrypted = encryptMessage( keyMessageHtml.value );
    encryptedMessageHtml.innerHTML = finalEncrypted;
    optionMessage = [
        {state: true, message: `Done!`},
        {state: true, message: `¡Completado!`},
        {state: true, message: `Fait !`},
        {state: true, message: `Feito!`}
    ]
    ManageMessages(selectMessageLanguage ( optionMessage ));
    encryptedMessageHtml.scrollIntoView({ behavior: "smooth" });
})

buttonDecryptHtml.addEventListener("click", function(){
    /*Event listener so it decrypt the message, it evaluates several condition to assure all it is completed.*/
    finalKey = keywordHtml.value;
    finalMessage = keyMessageHtml.value;
    let validFinalKey = evaluateValidCaracter( finalKey, 2 );
    let validFinalMessage = evaluateValidCaracter( finalMessage, 2 );

    if ( masterTable === " " || masterTable.length < 1 || masterTable === undefined || masterTable === null){
        optionMessage = [
            {state: false, message: `Master table not selected. Please select one.`},
            {state: false, message: `Tabla maestra no seleccionada. Por favor seleccione una.`},
            {state: false, message: `Tableau principal non sélectionné. Veuillez en sélectionner un.`},
            {state: false, message: `Tabela mestre não selecionada. Por favor selecione uma.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }

    if ( finalKey.length < 1 ){
        optionMessage = [
            {state: false, message: `The key is empty, please create a key.`},
            {state: false, message: `La llave está vacía, por favor cree una llave.`},
            {state: false, message: `La clé de chiffrement est vide, veuillez en créer une.`},
            {state: false, message: `A chave de criptografia está vazia, por favor, crie uma.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false
    } 

    if ( finalMessage.length < 1 ){
        optionMessage = [
            {state: false, message: `The message is empty, please create a message.`},
            {state: false, message: `El mensaje está vacío, por favor cree uno.`},
            {state: false, message: `Le message est vide, veuillez en créer une.`},
            {state: false, message: `A mensagem está vazia, por favor, crie uma.`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false
    } 

    if ( validFinalKey.state === false ){
        optionMessage = [
            {state: false, message: `Key has invalid characters, please delete them: ${validFinalKey.invalid.join(' - ')}`},
            {state: false, message: `La clave tiene carácteres inválidos, por favor bórrelos: ${validFinalKey.invalid.join(' - ')}`},
            {state: false, message: `La clé de chiffrement a des caractères non valides, veuillez les supprimer : ${validFinalKey.invalid.join(' - ')}`},
            {state: false, message: `A chave de criptografia têm Caracteres inválidos, por favor, exclua-os: ${validFinalKey.invalid.join(' - ')}`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }

    if ( validFinalMessage.state === false ){
        optionMessage = [
            {state: false, message: `Message has invalid characters, please delete them: ${validFinalMessage.invalid.join(' - ')}`},
            {state: false, message: `El mensaje tiene carácteres inválidos, por favor bórrelos: ${validFinalMessage.invalid.join(' - ')}`},
            {state: false, message: `Le message a des caractères non valides, veuillez les supprimer : ${validFinalMessage.invalid.join(' - ')}`},
            {state: false, message: `A mensagem têm Caracteres inválidos, por favor, exclua-os: ${validFinalMessage.invalid.join(' - ')}`}
        ]
        ManageMessages(selectMessageLanguage ( optionMessage ));
        return false;
    }

    createKey( keywordHtml.value );
    finalEncrypted = decryptMessage( keyMessageHtml.value );
    encryptedMessageHtml.innerHTML = finalEncrypted.join('');
    optionMessage = [
        {state: true, message: `Done!`},
        {state: true, message: `¡Completado!`},
        {state: true, message: `Fait !`},
        {state: true, message: `Feito!`}
    ]
    ManageMessages(selectMessageLanguage ( optionMessage ));
    encryptedMessageHtml.scrollIntoView({ behavior: "smooth" });
})

encryptedMessageHtml.addEventListener("click",function(){
    /*Event listener to copy all the information that is in the result space*/
    const content = encryptedMessageHtml.innerText;
    console.log(content)
    navigator.clipboard.writeText(content)
        .then(() => {
            optionMessage = [
                {state: true, message: `Copied!`},
                {state: true, message: `¡Copiado!`},
                {state: true, message: `Message copié !`},
                {state: true, message: `Mensagem copiada!`}
            ]
            ManageMessages(selectMessageLanguage ( optionMessage ));
        })
        .catch(err => {
            optionMessage = [
                {state: false, message: `Error ${err}`},
                {state: false, message: `Error ${err}`},
                {state: false, message: `Erreur ${err}`},
                {state: false, message: `Error ${err}`}
            ]
            ManageMessages(selectMessageLanguage ( optionMessage ));
        });

    
})
