<?php
namespace Eby\Model\Entity;

use Eby\Model\Entity\AbstractEntity;

class Project extends AbstractEntity
{

    private string $title;
    private string $description;
    private bool $tache;
    private bool $time;
    private string $userProject;

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;
        return $this;
    }

    /**
     * @return bool
     */
    public function isTache(): bool
    {
        return $this->tache;
    }

    /**
     * @param bool $tache
     */
    public function setTache(bool $tache): self
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
    public function getUserProject(): string
    {
        return $this->userProject;
    }

    /**
     * @param string $userProject
     */
    public function setUserProject(string $userProject): self
    {
        $this->userProject = $userProject;
        return $this;
    }



}