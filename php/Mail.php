<?php

class Mail {
	private $_subject;
	private $_msg;
	private $_nom;
	private $_mail;
	private $destinataire = "postmaster@camillemassu.com";

	//Créée une nouvelle instance de l'objet
    public function __construct($subject, $msg, $nom, $mail) {
		$this->_subject = $subject;
		$this->_msg = $msg;
		$this->_mail = $mail;
		$this->_nom = $nom;
	}

	public function verifyEMail() {
        //détermine si la variable existe et n'est pas NULL
		if (!(isset($this->_subject) && isset($this->_msg) && isset($this->_nom) && isset($this->_mail)))
			return false;
        //détermine si la variable est une chaîne de caractères
		if (!(is_string($this->_subject) && is_string($this->_msg) && is_string($this->_nom) && is_string($this->_mail)))
			return false;
		if (($this->_subject == "") || ($this->_msg == "") || ($this->_nom == "") || ($this->_mail == ""))
			return false;
        //filtre les variables
		if (!(filter_var($this->_mail, FILTER_VALIDATE_EMAIL)))
			return false;
		return true;
	}

	public function cleanString() {
		$bad = array("content-type","bcc:","to:","cc:","href");
		$this->$subject = str_replace($this->_subject);
		$this->_msg = str_replace($this->_msg);
		$this->_nom = str_replace($this->_nom);
		$this->$mail = str_replace($this->_mail);
	}

	public function sendEMail() {
		$this->cleanString();
		$email_message = "Nom: ".$this->_nom."\n";
        $email_message .= "Email: ".$this->_mail."\n";
        $email_message .= "Contenu: ".$this->_msg."\n";

	  $headers = 'From: '.$this->_mail."\r\n".
	  'Reply-To: '.$this->_mail."\r\n";
	  mail($this->_destinataire, $this->_subject, $this->_email_message, $headers);
	}
}

?>
