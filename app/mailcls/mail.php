<?php
class mailcls{
    function __construct($app){
        //Nothing here...
        $this->conf = new stdClass();
        $this->conf->sitetitle = $app['conf.title'];
        $this->conf->from = 'no-reply@daysplit.artur99.net';
        $this->twig = $app['twig'];
    }
    public function send_signup($email){
        $subject = 'Cont înregistrat cu succes';
        $maildata['title'] = 'Contul DaySplit a fost înregistrat cu succes';
        $maildata['text1'] = 'Contul dumneavoastră de pe siteul DaySplit a fost înregistrat cu succes.';
        $maildata['text2'] = 'Vă mulțumim pentru înregistrare!';
        return $this->sendmail($email, $subject, $maildata);
    }
    public function send_addedgroup($email){
        $subject = 'Grup Nou';
        $maildata['title'] = 'Ați fost adăugat într-un nou grup pe Daysplit';
        $maildata['text1'] = 'Contul dumneavoastră de pe siteul DaySplit a fost înregistrat într-un nou grup, vă invităm să verificați, iar dacă nu sunteți de acord să vă eliminați din lista membrilor grupului.';
        $maildata['link'] = g_link("/dashboard/groups");
        $maildata['text2'] = 'Vă mulțumim!';
        return $this->sendmail($email, $subject, $maildata);
    }
    public function send_reset($email, $data){

        $subject = 'Resetare parolă';
        $maildata['title'] = 'Resetare parolă DaySplit';
        $maildata['text1'] = 'A fost solicitată o nouă parolă pentru contul dumneavoastră. Pentru a o reseta accesați linkul următor:';
        $maildata['link'] = $data['reset_link'];
        $maildata['text2'] = 'Linkul este valabil 24 de ore.';
        return $this->sendmail($email, $subject, $maildata);
    }
    public function sendmail($to, $subject, $data){
        $subject = '['.$this->conf->sitetitle.'] '.$subject;
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers.= 'Content-type:text/html;charset=UTF-8' . "\r\n";
        $headers.= 'From: <' . $this->conf->from . '>' . "\r\n";
        $twigdata = $data;
        $twigdata['subject'] = $subject;
        $html = $this->twig->render('mail_template.twig', $twigdata);

        return @mail($to,$subject,$html,$headers);
    }

}
