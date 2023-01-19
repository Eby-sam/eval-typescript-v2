<?php
namespace Eby\Model\Entity;

use Eby\Model\Entity\AbstractEntity;

class Taches extends AbstractEntity
{

    private string $tache;
    private bool $time;
    private string $userTache;



    /**
     * @return string
     */
    public function getTache(): string
    {
        return $this->tache;
    }

    /**
     * @param string $tache
     */
    public function setTache(string $tache): self
    {
        $this->tache = $tache;
        return $this;
    }

    /**
     * @return bool
     */
    public function isTime(): bool
    {
        return $this->time;
    }

    /**
     * @param bool $time
     */
    public function setTime(bool $time): self
    {
        $this->time = $time;
        return $this;
    }

    /**
     * @return string
     */
    public function getUserTache(): string
    {
        return $this->userTache;
    }

    /**
     * @param string $userTache
     */
    public function setUserTache(string $userTache): self
    {
        $this->userTache = $userTache;
        return $this;
    }

}
